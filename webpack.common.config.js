const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [ './node_modules/waypoints/lib/noframework.waypoints', 'jquery'] 
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({$: 'jquery'}),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js'}),
        new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
    ]
};