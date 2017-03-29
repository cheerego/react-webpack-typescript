const path = require('path');
const html = require('html-webpack-plugin');
const webpack = require('webpack')
const { resolve } = require('path');


module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        path.join(__dirname, 'src', 'index.tsx')
        // the entry point of our app
    ],
    output: {
        filename: 'assets/bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
            // necessary for HMR to know where to load the hot update chunks
    },

    // context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server
        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
            // match the output `publicPath`
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [
                    'react-hot-loader', 'awesome-typescript-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new html({
            template: 'index.html',
            'title': 'hello world'
        }),
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};