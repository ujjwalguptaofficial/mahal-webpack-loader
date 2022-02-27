[![CI](https://github.com/ujjwalguptaofficial/mahal-webpack-loader/actions/workflows/ci.yml/badge.svg)](https://github.com/ujjwalguptaofficial/mahal-webpack-loader/actions/workflows/ci.yml) [![GitHub version](https://badge.fury.io/gh/ujjwalguptaofficial%2Fmahal-webpack-loader.svg)](https://badge.fury.io/gh/ujjwalguptaofficial%2Fmahal-webpack-loader) [![npm version](https://badge.fury.io/js/mahal-webpack-loader.svg)](https://badge.fury.io/js/mahal-webpack-loader)

# mahal-webpack-loader

Webpack loader for [mahal](https://github.com/ujjwalguptaofficial/mahal) framework.

# Install

```
npm i mahal-webpack-loader
```

# Doc

Add `mahal` rule in webpack config 

```
{
    test: /\.mahal?$/,
    use: {
        loader: require.resolve('mahal-webpack-loader')
    },
    exclude: /node_modules/
}
```