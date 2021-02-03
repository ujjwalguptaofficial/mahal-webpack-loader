const { tajHtmlCompiler } = require("./template_compiler");
exports.extractComponent = function (
    { query, descriptor, appendExtension, lang }
) {
    // html
    console.log("query.type", `type ${query.type}hello`)
    if (query.type == 'html') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'html')
        }
        let renderFn;
        try {
            renderFn = tajHtmlCompiler.createRenderer(descriptor.html);
        } catch (error) {
            this.callback(error);
            return;
        }
        this.callback(
            null,
            `export default ${renderFn.toString()}`
            // 'export function yomyname(){ this.name="ujjwal" }'
            //|| descriptor.html,
            // descriptor.html.map
        )
        return
    }
    if (query.type == 'script') {
        // if (appendExtension) {
        this.resourcePath += '.' + (lang || 'ts')
        // }
        console.log("resourcepath", this.resourcePath);
        this.callback(
            null,
            descriptor.script
        )
        return
    }

}