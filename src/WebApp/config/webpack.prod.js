const webpack = require('webpack');
const merge = require('webpack-merge');
const atl = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const path = require('path');
const common = require('./webpack.common');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

// Angular 2 AOT compilation
common.module.loaders[0].loaders = ['@ngtools/webpack'];

module.exports = merge(common, {
    entry: {
        main: ['../wwwroot/src/main.ts']
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        publicPath: '/dist/'
    },
    plugins: [
        new AotPlugin({
            tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
            entryModule: 'wwwroot/src/app/app.module#AppModule'
        }),
        new ExtractTextPlugin('styles.css'),
        new atl.ForkCheckerPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../wwwroot/dist/vendor-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../wwwroot/dist/polyfills-manifest.json')
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8: true, keep_fnames: true },
            compress: { screw_ie8: true },
            comments: false
        })
    ]
});
