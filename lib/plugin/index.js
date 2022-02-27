const qs = require('querystring');
// const RuleSet = require('webpack/lib/RuleSet')

// const BasicEffectRulePlugin = require('webpack/lib/rules/BasicEffectRulePlugin')
// const BasicMatcherRulePlugin = require('webpack/lib/rules/BasicMatcherRulePlugin')
// const DescriptionDataMatcherRulePlugin = require('webpack/lib/rules/DescriptionDataMatcherRulePlugin')
// const RuleSetCompiler = require('webpack/lib/rules/RuleSetCompiler')
// const UseEffectRulePlugin = require('webpack/lib/rules/UseEffectRulePlugin')

// const ruleSetCompiler = new RuleSetCompiler([
//     new BasicMatcherRulePlugin('test', 'resource'),
//     new BasicMatcherRulePlugin('mimetype'),
//     new BasicMatcherRulePlugin('dependency'),
//     new BasicMatcherRulePlugin('include', 'resource'),
//     new BasicMatcherRulePlugin('exclude', 'resource', true),
//     new BasicMatcherRulePlugin('conditions'),
//     new BasicMatcherRulePlugin('resource'),
//     new BasicMatcherRulePlugin('resourceQuery'),
//     new BasicMatcherRulePlugin('resourceFragment'),
//     new BasicMatcherRulePlugin('realResource'),
//     new BasicMatcherRulePlugin('issuer'),
//     new BasicMatcherRulePlugin('compiler'),
//     new DescriptionDataMatcherRulePlugin(),
//     new BasicEffectRulePlugin('type'),
//     new BasicEffectRulePlugin('sideEffects'),
//     new BasicEffectRulePlugin('parser'),
//     new BasicEffectRulePlugin('resolve'),
//     new BasicEffectRulePlugin('generator'),
//     new UseEffectRulePlugin()
// ])

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
            // console.log("rule", rule.test, "file", qry);
            currentResource = qry
            return true
        },
        resourceQuery: query => {
            if (!query) { return false }
            // console.log("parsed", query);
            const parsed = qs.parse(query.slice(1))
            if (parsed.mahal == null || parsed.lang == null) {
                return false
            }
            const fakeResourcePath = `${currentResource}.${parsed.lang}`
            if (resource) {
                if (resource(fakeResourcePath) === false) {
                    return false;
                }
            }
            else if (rule.test) {
                if (rule.test instanceof RegExp) {
                    return rule.test.test(fakeResourcePath);
                }
                return false;
            }
            if (resourceQuery && !resourceQuery(query)) {
                return false
            }
            // console.log("true from resourcepath", fakeResourcePath);
            // console.log("resource", resource);
            return true
        }
    })
    delete res.test;
    return res;
}

class MahalLoaderPlugin {

    constructor(option) {
        option = option || {};
        global.lang = option.lang || 'js';
    }

    apply(compiler) {
        const rawRules = compiler.options.module.rules;
        const mahalRuleIndex = matchFileAndReturnIndex(rawRules, ("ujjwal.mahal"));
        const mahalRule = rawRules[mahalRuleIndex];
        if (!mahalRule) {
            (r, i) => i !== mahalRuleIndex
            throw new Error("no loader for mahal specified");
        }
        // console.log("mahalrule", mahalRule);
        // const { rules } = new RuleSet(rawRules);
        const mahalRuleUse = (mahalRule.use && mahalRule.use[0]) || {
            loader: mahalRule.loader
        };
        mahalRuleUse.ident = 'mahal-loader-options'
        mahalRuleUse.options = mahalRule.options || {};

        // clone js,ts, css rule
        const clonedRules = rawRules
            .filter((r, i) => {
                if (i === mahalRuleIndex) {
                    return false;
                }
                return matchRule(r, "test.ts") || matchRule(r, "test.js") ||
                    matchRule(r, "test.css") || matchRule(r, "test.scss")
                    || matchRule(r, "test.sass") || matchRule(r, "test.less")
            })
            .map(cloneRule);

        const mahalRuleWithPitcher = {
            loader: require.resolve('./pitcher'),
            resourceQuery: query => {
                if (!query) return false
                const parsed = qs.parse(query.slice(1))
                return parsed.mahal != null
            },
            options: {
                cacheDirectory: mahalRuleUse.options.cacheDirectory,
                cacheIdentifier: mahalRuleUse.options.cacheIdentifier
            }
        }
        const rules = [
            mahalRuleWithPitcher,
            ...clonedRules,
            ...rawRules,
        ];
        // console.log("rules modified", rules)
        compiler.options.module.rules = rules;
    }
}

function matchRule(rule, file) {
    if (rule.test instanceof RegExp) {
        return rule.test.test(file);
    }
    return false;
}

function matchFileAndReturnIndex(rawRules, file) {
    return rawRules.findIndex(q => {
        return matchRule(q, file);
    });
}

module.exports = MahalLoaderPlugin;