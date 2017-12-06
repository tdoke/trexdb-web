const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config');

module.exports = merge(webpackCommonConfig, {
    devtool: 'inline-source-map', 
    devServer: {    
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});