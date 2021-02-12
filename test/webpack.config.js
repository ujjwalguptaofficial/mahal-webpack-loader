const path = require('path');
console.log("path", path.resolve(__dirname, 'bin/'))

const TajPlugin = require('../src/plugin');

const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './test/index.ts',
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.taj?$/,
            use: [
                {
                    loader: path.resolve('./src/index.js')
                }],
            exclude: /node_modules/
        },
        {
            test: /\.css?$/,
            use: [
                'style-loader',
                {
                    loader: require.resolve('css-loader')
                }
            ],
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
        new TajPlugin(),
        new HtmlWebPackPlugin({
            cache: true,
            hash: true,
            template: 'test/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ]
};