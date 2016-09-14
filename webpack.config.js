'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devtool = 'cheap-module-eval-source-map'

const devServer = {
  hot: true,
  inline: true
}

const entry = {
  hot: 'webpack/hot/dev-server',
  polyfills: './src/polyfills',
  vendors: './src/vendors',
  main: './src/main'
}

const output = {
  filename: '[name].js?[hash]', // `?[hash]` ensures browser does not cache compilations
  path: './dist'
}

const extensions = [
  '',
  '.js',
  '.css',
  '.html'
]

const loaders = [{
  test: /.js$/,
  exclude: /node_modules/,
  loaders: ['ng-annotate', 'babel']
}, {
  test: /.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /.html$/,
  exlude: /node_modules/,
  include: /static/,
  loader: 'html'
}, {
  test: /.html$/,
  exclude: /node_modules/,
  include: /src/,
  loaders: [
    'ngtemplate?requireAngular',
    'html'
  ]
}, {
  test: /.(ico|png|eot|svg|ttf|woff|woff2)$/,
  loader: 'url?limit=10000'
}]

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    template: './static/index.html',
    inject: 'head'
  }),
  new webpack.HotModuleReplacementPlugin()
]

module.exports = {
  devtool,
  devServer,
  entry,
  output,
  resolve: {
    extensions
  },
  module: {
    loaders
  },
  plugins
}
