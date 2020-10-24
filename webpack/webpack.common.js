const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const sourceDirectoryPath = '../src/';

module.exports = {
    entry: {
        app: path.join(__dirname, sourceDirectoryPath + 'app.ts'),
        background: path.join(__dirname, sourceDirectoryPath + 'background.ts'),
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '@config': path.resolve(__dirname, sourceDirectoryPath, 'config'),
            '@core': path.resolve(__dirname, sourceDirectoryPath, 'core'),
            '@services': path.resolve(__dirname, sourceDirectoryPath, 'services'),
        }
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin({
            patterns: [{from: '.', to: '../', context: 'public'}],
            options: {}
        }),
    ]
};
