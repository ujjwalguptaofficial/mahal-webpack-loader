exports.getContentFromXmlNode = function (src, tag) {
    const startIndex = src.indexOf(`<${tag}>`);
    if (startIndex < 0) {
        return '';
    }
    const endIndex = src.indexOf(`</${tag}>`);
    if (endIndex < 0) {
        return ``;
    }

    return src.substring(startIndex + tag.length + 2, endIndex);
}