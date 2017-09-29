var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: './bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: APP_DIR + '/index.template.ejs',
            inject: 'body',
        }),
        new UglifyJSPlugin({
            compress: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
