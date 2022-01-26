const { getOptions, stringifyRequest } = require('loader-utils');
const qs = require('querystring');
const scopedCssLoader = require.resolve('./scoped_css_loader')

function isPitcher(l) {
    return l.path !== __filename;
}

const isNullLoader = l => /(\/|\\|@)null-loader/.test(l.path)
const isCSSLoader = l => /(\/|\\|@)css-loader/.test(l.path)

function genRequest(loaders) {
    const seen = new Map()
    const loaderStrings = []

    loaders.forEach(loader => {
        const identifier = typeof loader === 'string'
            ? loader
            : (loader.path + loader.query)
        const request = typeof loader === 'string' ? loader : loader.request
        if (!seen.has(identifier)) {
            seen.set(identifier, true)
            loaderStrings.push(request)
        }
    });

    // console.log("loaderStrings", loaderStrings);

    return stringifyRequest(this, '-!' + [
        ...loaderStrings,
        this.resourcePath + this.resourceQuery
    ].join('!'))
}

function pitcher(remainingRequest) {
    // const options = getOptions(this)
    // const { cacheDirectory, cacheIdentifier } = options
    // const query = qs.parse(this.resourceQuery.slice(1));

    let loaders = this.loaders;

    // console.log("loaders from pitch", loaders, "query", query);
    // console.log("query-id", query.id);

    // do not inject if user uses null-loader to void the type (#1239)
    if (loaders.some(isNullLoader)) {
        return
    }

    // remove self from loaders
    loaders = loaders.filter(isPitcher);


    const cssLoaderIndex = loaders.findIndex(isCSSLoader)
    if (cssLoaderIndex > -1) {
        const afterLoaders = loaders.slice(0, cssLoaderIndex + 1)
        const beforeLoaders = loaders.slice(cssLoaderIndex + 1)
        const request = genRequest.call(this, [
            ...afterLoaders,
            scopedCssLoader,
            ...beforeLoaders
        ])
        return `import code from ${request}; export default code; export * from ${request}`
    }

    const request = genRequest.call(this, loaders);
    return `import code from ${request}; export default code; export * from ${request}`

}

module.exports.pitch = pitcher;