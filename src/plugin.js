const qs = require('querystring');
// const RuleSet = require('webpack/lib/RuleSet')

const BasicEffectRulePlugin = require('webpack/lib/rules/BasicEffectRulePlugin')
const BasicMatcherRulePlugin = require('webpack/lib/rules/BasicMatcherRulePlugin')
const DescriptionDataMatcherRulePlugin = require('webpack/lib/rules/DescriptionDataMatcherRulePlugin')
const RuleSetCompiler = require('webpack/lib/rules/RuleSetCompiler')
const UseEffectRulePlugin = require('webpack/lib/rules/UseEffectRulePlugin')

const ruleSetCompiler = new RuleSetCompiler([
    new BasicMatcherRulePlugin('test', 'resource'),
    new BasicMatcherRulePlugin('mimetype'),
    new BasicMatcherRulePlugin('dependency'),
    new BasicMatcherRulePlugin('include', 'resource'),
    new BasicMatcherRulePlugin('exclude', 'resource', true),
    new BasicMatcherRulePlugin('conditions'),
    new BasicMatcherRulePlugin('resource'),
    new BasicMatcherRulePlugin('resourceQuery'),
    new BasicMatcherRulePlugin('resourceFragment'),
    new BasicMatcherRulePlugin('realResource'),
    new BasicMatcherRulePlugin('issuer'),
    new BasicMatcherRulePlugin('compiler'),
    new DescriptionDataMatcherRulePlugin(),
    new BasicEffectRulePlugin('type'),
    new BasicEffectRulePlugin('sideEffects'),
    new BasicEffectRulePlugin('parser'),
    new BasicEffectRulePlugin('resolve'),
    new BasicEffectRulePlugin('generator'),
    new UseEffectRulePlugin()
])
function cloneRule(rule) {
    // rule = ruleSetCompiler.exec([rule]);
    const { resource, resourceQuery } = rule
    let currentResource;
    // delete rule.test;
    const res = Object.assign({}, rule, {
        resource: qry => {
            if (!qry) {
                return false;
            }
            console.log("rule", rule, "resource", qry);
            currentResource = qry
            return true
        },
        resourceQuery: query => {
            if (!query) { return false }
            console.log("parsed", query);
            const parsed = qs.parse(query.slice(1))
            if (parsed.taj == null || parsed.lang == null) {
                return false
            }
            const fakeResourcePath = `${currentResource}.${parsed.lang}`
            if (resource && !resource(fakeResourcePath)) {
                return false
            }
            if (resourceQuery && !resourceQuery(query)) {
                return false
            }
            console.log("true from resourcepath");
            return true
        }
    })
    delete res.test;
    return res;
}

class TajLoaderPlugin {
    apply(compiler) {
        const rawRules = compiler.options.module.rules;
        const tajRuleIndex = rawRules.findIndex(q => {
            return q.test.test("ujjwal.taj");
        });
        const tajRule = rawRules[tajRuleIndex];
        if (!tajRule) {
            throw new Error("no loader for taj specified");
        }
        // console.log("tajrule", tajRule);
        // const { rules } = new RuleSet(rawRules);
        const tajRuleUse = tajRule.use[0];
        tajRuleUse.ident = 'taj-loader-options'
        tajRuleUse.options = tajRule.options || {};

        const clonedRules = rawRules
            .filter((r, i) => i !== tajRuleIndex)
            .map(cloneRule);

        const tajRuleWithPitcher = {
            loader: require.resolve('./pitcher'),
            resourceQuery: query => {
                if (!query) return false
                const parsed = qs.parse(query.slice(1))
                return parsed.taj != null
            },
            options: {
                cacheDirectory: tajRuleUse.options.cacheDirectory,
                cacheIdentifier: tajRuleUse.options.cacheIdentifier
            }
        }
        const rules = [
            tajRuleWithPitcher,
            ...clonedRules,
            ...rawRules,
        ];
        // console.log("rules modified", rules)
        compiler.options.module.rules = rules;
    }
}

module.exports = TajLoaderPlugin;