const { stringifyRequest } = require('loader-utils');
const qs = require('querystring');
const { extractComponent } = require('./extract_component');
const componentRendererPath = require.resolve('./runtime/render_component')
const { getContentFromXmlNode } = require("./utils/get_content_from_xml_node")
const createHash = require('hash-sum');
const path = require('path');

exports.default = async function loader(source) {
    const { resourcePath, minimize, context } = this;
    const resourceQuery = this.resourceQuery;
    const queryParam = qs.parse(resourceQuery);
    const options = this.getOptions();
    const isProduction = options.productionMode || minimize || process.env.NODE_ENV === 'production'

    const rawShortFilePath = path
        .relative(context, resourcePath)
        .replace(/^(\.\.[\/\\])+/, '')

    const shortFilePath = rawShortFilePath.replace(/\\/g, '/') + resourceQuery

    const moduleId = createHash(
        isProduction
            ? (shortFilePath + '\n' + source)
            : shortFilePath
    )

    var html = getContentFromXmlNode(source, 'html');
    var script = getContentFromXmlNode(source, 'script');
    var style = getContentFromXmlNode(source, 'style');
    const componentPart = {
        html: html[0],
        script: script[0],
        style: style
    };

    if (queryParam.type) {
        // console.log("type", queryParam.type)
        const callback = this.async();
        extractComponent.call(this, {
            appendExtension: false,
            descriptor: componentPart,
            lang: queryParam.lang,
            query: queryParam,
            scoped: queryParam.scoped === "true"
        })
        return;
    }
    const imports = {}
    if (componentPart.html) {
        let isScoped = false;
        style.every(item => {
            if (item.attr.scoped) {
                isScoped = true;
                return false;
            }
            return true;
        });
        const src = componentPart.html.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?mahal&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        const query = `?mahal&type=html&id=${moduleId}&scoped=${isScoped}`;
        // const request = templateRequest = stringifyRequest(src + query);
        const request = templateRequest = stringifyRequest(this, src + query);
        // console.log("request", request);
        imports['html'] = `import  render  from ${request}\n`
    }
    if (componentPart.style) {
        imports['style'] = '';
        const src = componentPart.style.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?mahal&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        componentPart.style.forEach((styleData, index) => {
            const attr = styleData.attr;
            const query = `?mahal&type=style&lang=${attr.lang || 'css'}&index=${index}&id=${moduleId}&scoped=${attr.scoped || ''}`
            // const request = templateRequest = stringifyRequest(src + query);
            const request = stringifyRequest(this, src + query);
            // console.log("request", request);
            imports['style'] += `import  style${index}  from ${request}\n`;
        });


    }
    if (componentPart.script) {
        const src = componentPart.script.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?mahal&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        const query = `?mahal&type=script&lang=${componentPart.script.attr.lang || global.lang || 'ts'}&id=${moduleId}`
        // const request = templateRequest = stringifyRequest(src + query);
        const request = templateRequest = stringifyRequest(this, src + query);
        // console.log("request", request);
        imports['script'] = `import script from ${request}\n` +
            `export * from ${request}`;

    }
    let rawCode = "";
    for (const item in imports) {
        rawCode += imports[item] + "\n";
    }
    rawCode +=
        `import {renderComponent} from ${stringifyRequest(this, `!${componentRendererPath}`)}
    var component = renderComponent({
        script:script,
        render:render
    })
    `;
    rawCode += `export default component`
    // console.log("rawcode", rawCode);
    return rawCode;
}