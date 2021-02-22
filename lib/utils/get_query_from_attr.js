exports.getAttrFromQuery = (attr) => {
    return Object.keys(attr).reduce((a, next) => {
        return `${a}${next}=${query[next]}&`
    }, "");
}