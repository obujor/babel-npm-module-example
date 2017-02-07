/* eslint-disable */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'example.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },

    target: 'node',

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],

    resolve: {
        extensions: ['.js'],
        modules: [
            'node_modules',
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017'],
                    plugins: ['transform-runtime']
                },
            }, {
                test: /\.json$/,
                use: 'json-loader',
            },
        ],
    }
};