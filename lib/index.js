const { stringifyRequest } = require('loader-utils');
const qs = require('querystring');
const { extractComponent } = require('./extract_component');
const componentRendererPath = require.resolve('./runtime/render_component')
const { getContentFromXmlNode } = require("./utils/get_content_from_xml_node")

exports.default = async function loader(source) {
    // console.log("source", source);
    // console.log("rules", this);
    // return;
    // console.log('rawQuery', this.resourceQuery);
    const { resourcePath } = this;
    const queryParam = qs.parse(this.resourceQuery);
    // this.callback(null, 'function name(){ this.name = ujjwal }');
    // return;
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
        })
        return;
    }
    const imports = {}
    if (componentPart.html) {
        const src = componentPart.html.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?mahal&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        const query = `?mahal&type=html`
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
            const query = `?mahal&type=style&lang=${styleData.attr.lang || 'css'}&index=${index}`
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
        const query = `?mahal&type=script&lang=${componentPart.script.attr.lang || global.lang}`
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
    console.log('comp',component)
    `;
    rawCode += `export default component`
    // console.log("rawcode", rawCode);
    return rawCode;
}