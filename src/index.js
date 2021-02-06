var parseString = require('xml2js').parseString;
var DOMParser = require('xmldom').DOMParser;
const htmlparser2 = require("htmlparser2");
var DomParser = require('dom-parser');
var parser = new DomParser();
const { stringifyRequest } = require('loader-utils');
const qs = require('querystring');
const { extractComponent } = require('./extract_component');
const componentRendererPath = require.resolve('./runtime/render_component')

exports.default = async function loader(source) {
    // console.log("source", source);
    console.log('rawQuery', this.resourceQuery);
    const { resourcePath } = this;
    const queryParam = qs.parse(this.resourceQuery);
    // this.callback(null, 'function name(){ this.name = ujjwal }');
    // return;
    const callback = this.async();
    const componentDescription = await new Promise((res) => {
        var dom = parser.parseFromString(source);
        var html = dom.getElementsByTagName('html');
        var script = dom.getElementsByTagName('script');
        var style = dom.getElementsByTagName('style');
        res({
            html: html.length > 0 ? html[0].innerHTML : null,
            script: script.length > 0 ? script[0].innerHTML : null,
            style: style.length > 0 ? style[0].innerHTML : null
        })
    });
    if (queryParam.type) {
        console.log("type", queryParam.type)
        extractComponent.call(this, {
            appendExtension: false,
            descriptor: componentDescription,
            lang: queryParam.lang,
            query: queryParam,
        })
        return;
    }
    const imports = {}
    if (componentDescription.html) {
        const src = componentDescription.html.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?taj&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        const query = `?taj&type=html`
        // const request = templateRequest = stringifyRequest(src + query);
        const request = templateRequest = stringifyRequest(this, src + query);
        console.log("request", request);
        imports['html'] = `import  render  from ${request}`
    }
    if (componentDescription.script) {
        const src = componentDescription.script.src || resourcePath
        // const idQuery = `&id=${id}`
        // const scopedQuery = hasScoped ? `&scoped=true` : ``
        // const attrsQuery = attrsToQuery(descriptor.template.attrs)
        // const query = `?taj&type=template${idQuery}${scopedQuery}${attrsQuery}${inheritQuery}`
        const query = `?taj&type=script&lang=ts`
        // const request = templateRequest = stringifyRequest(src + query);
        const request = templateRequest = stringifyRequest(this, src + query);
        console.log("request", request);
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
    console.log("rawcode", rawCode);
    this.callback(null, rawCode);
    return;
}