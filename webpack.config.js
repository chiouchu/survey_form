var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Postcss plugins
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var autoprefixer = require('autoprefixer');

// ENV
var __PROD__ = process.env.NODE_ENV === 'production';
var __DEV__ = process.env.NODE_ENV === 'development';

var webpackConfig = {
    entry: path.resolve(__dirname, 'scripts/entry.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'eslint-loader',
                include: path.resolve(__dirname, 'scripts'),
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', "css-loader!postcss-loader"),
                include: __dirname
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'scripts'),
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        alias: {
            JSON: path.resolve(__dirname, 'json')
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.min.css", { allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        })
    ],
    postcss: function plugins(bundler) {
        return [
            postcssImport({
                addDependencyTo: bundler
            }),
            postcssNested,
            autoprefixer({ browsers: 'last 2 version' })
        ];
    }
};

module.exports = webpackConfig;
