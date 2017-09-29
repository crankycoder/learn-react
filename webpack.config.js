var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var entry_path = APP_DIR + "/index.js';

var config = {
    entry: entry_path,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    }
};

module.exports = config;
