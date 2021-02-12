const { createRenderer } = require("taj-html-compiler");
exports.extractComponent = function (
    { query, descriptor, appendExtension, lang }
) {
    // html
    console.log("extract component", "query.type", `type ${query.type}`, "appendExtension", appendExtension)
    if (query.type == 'html') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'html')
        }
        let renderFn;
        try {
            renderFn = createRenderer(descriptor.html);
        } catch (error) {
            this.callback(new Error(error));
            return;
        }
        this.callback(
            null,
            `export default ${renderFn.toString()}`
        )
        return
    }
    if (query.type == 'script') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'ts')
        }
        // console.log("resourcepath", this.resourcePath);
        this.callback(
            null,
            // 'import script from'
            descriptor.script
        )
        return
    }
    if (query.type == 'style') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'css')
        }
        this.callback(
            null,
            descriptor.style[query.index || 0]
        )
        return
    }

}