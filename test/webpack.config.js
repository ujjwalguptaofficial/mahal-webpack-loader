const path = require('path');
console.log("path", path.resolve(__dirname, 'bin/'))
module.exports = {
    entry: './test/index.js',
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.taj?$/,
            use: [{
                loader: path.resolve('./src/index.js')
            }],
            exclude: /node_modules/
        },
        {
            test: /\.css?$/,
            use: 'css-loader',
            exclude: /node_modules/
        },
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.taj']
    },
    output: {
        filename: 'bundles.js',
        path: path.resolve(__dirname, 'bin/')
    },
    plugins: [

    ]
};