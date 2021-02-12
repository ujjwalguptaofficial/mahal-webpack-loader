function getContentFromXmlNode(src, tag, prevResult = []) {
    const startIndex = src.indexOf(`<${tag}>`);
    if (startIndex < 0) {
        return prevResult;
    }
    const endIndex = src.indexOf(`</${tag}>`);
    if (endIndex < 0) {
        return prevResult;
    }
    prevResult.push(src.substring(startIndex + tag.length + 2, endIndex))
    if (tag != 'style') {
        return prevResult;
    }
    else {
        return getContentFromXmlNode(src.substring(endIndex + tag.length + 3), tag, prevResult);
    }
}

exports.getContentFromXmlNode = getContentFromXmlNode;