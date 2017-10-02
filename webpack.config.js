var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: { presets: ['react']}
            }
        ]
    },
    resolve: {
        "alias": {
            "react": "preact-compat",
            "react-dom": "preact-compat",
        }
    }
};

module.exports = config;
