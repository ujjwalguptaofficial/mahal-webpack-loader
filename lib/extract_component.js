const { createRenderer } = require("@mahaljs/html-compiler");
exports.extractComponent = function (
    { query, descriptor, appendExtension, lang, scoped }
) {
    // html
    // console.log("extract component", "query.type", `type ${query.type}`, "appendExtension", appendExtension);
    // console.log('lang', lang, 'scoped', scoped);
    if (query.type == 'html') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'html')
        }
        let renderFn;
        try {
            renderFn = createRenderer(
                descriptor.html.content,
                scoped ? query.id : null
            );
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
            descriptor.script.content
        )
        return
    }
    if (query.type == 'style') {
        if (appendExtension) {
            this.resourcePath += '.' + (lang || 'css')
        }
        this.callback(
            null,
            descriptor.style[query.index || 0].content
        )
        return
    }

}