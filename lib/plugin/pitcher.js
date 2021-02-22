const { getOptions, stringifyRequest } = require('loader-utils');
const qs = require('querystring');

function isPitcher(l) {
    return l.path !== __filename;
}

const isNullLoader = l => /(\/|\\|@)null-loader/.test(l.path)

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

    console.log("loaderStrings", loaderStrings);

    return stringifyRequest(this, '-!' + [
        ...loaderStrings,
        this.resourcePath + this.resourceQuery
    ].join('!'))
}

function pitcher(remainingRequest) {
    const options = getOptions(this)
    const { cacheDirectory, cacheIdentifier } = options
    const query = qs.parse(this.resourceQuery.slice(1));

    let loaders = this.loaders;

    console.log("loaders from pitch", loaders, "query", query);

    // do not inject if user uses null-loader to void the type (#1239)
    if (loaders.some(isNullLoader)) {
        return
    }

    // remove self from loaders
    loaders = loaders.filter(isPitcher);


    // console.log("loaders from pitcher", loaders, "query", query);

    // console.log("request", genRequest.call(this, loaders));
    const request = genRequest.call(this, loaders);
    return `import code from ${request}; export default code; export * from ${request}`

}

module.exports.pitch = pitcher;