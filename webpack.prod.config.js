const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.config');

module.exports = merge(webpackCommonConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [ 
        new UglifyJSPlugin({ sourceMap: true }),
        new webpack.DefinePlugin( { 'process.env.NODE_ENV': JSON.stringify('production') })
     ]
});