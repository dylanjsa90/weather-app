'use strict';

let webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractText = require('extract-text-webpack-plugin');

const apiURL = process.env.API_URL || 'http://localhost:3000';

let plugins = [
  new ExtractText('bundle.css', {
    allChunks: true
  }),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(apiURL)
  })
];

module.exports = {
  entry: './app/entry.js',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  plugins: plugins,
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  postcss: function() {
    return [autoprefixer];
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!'),
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]',
      },
    ]
  }
};