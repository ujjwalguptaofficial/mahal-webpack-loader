const path = require('path');
console.log("path", path.resolve(__dirname, 'bin/'))
module.exports = {
    entry: './test/index.ts',
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.taj?$/,
            use: [
                'ts-loader',
                {
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
            use: {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.taj$/],
                }
            },
            exclude: /node_modules/,
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