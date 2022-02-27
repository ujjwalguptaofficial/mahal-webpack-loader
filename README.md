

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