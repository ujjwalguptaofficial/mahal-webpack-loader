exports.renderComponentPart = function (
    { context, query, descriptor, appendExtension, lang, cb }
) {
    // html
    console.log("query.type", `type ${query.type}hello`)
    if (query.type == 'html') {
        if (appendExtension) {
            context.resourcePath += '.' + (lang || 'html')
        }
        console.log("cb executing")
        context.callback(
            null,
            descriptor.html
            // 'export function yomyname(){ this.name="ujjwal" }'
            //|| descriptor.html,
            // descriptor.html.map
        )
        return
    }
}