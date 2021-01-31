const path = require('path');

module.exports = {
    entry: './test/index.taj',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.taj?$/,
            use: [{
                loader: path.resolve('./bin/bundle.js')
            }],
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            use: 'css-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.taj']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bin/')
    },
    plugins: [

    ]
};