const webpack = require('webpack');
const path = require('path');
const HtmlWebpackAssetPlugin = require('html-asset-webpack-plugin');
const helper = require('./helper');
const cfg = require('../app.config');
const { port, host } = cfg.server;

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js'],
  },
  entry: helper.createDevModeEntry(cfg.html),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: `http://${host}:${port}/`,
    filename: '[name].js',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
      DEBUG: true,
    }),
    new webpack.LoaderOptionsPlugin({ debug: true, minimize: false }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    ...helper.createHtmlPlugins(cfg.html),
    new HtmlWebpackAssetPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // 通过正则匹配js,jsx文件
        loader: 'babel-loader', // 调用 babel进行es6->es5转换,并且启用react热替换
        exclude: /node_modules/, // 跳过 node_modules 目录
        include: path.resolve(__dirname, '../src'),
        query: {
          cacheDirectory: true,
        },
      },
      { test: /\.(jpg|gif|png|svg|ico)$/, loader: 'file-loader?name=images/[name].[ext]' },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/'),
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?sourceMap'],
      },
    ],
  },
};
