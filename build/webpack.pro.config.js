const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './src/entry.js',
    vendor: ['react', 'react-router', 'mobx', 'antd'],
  },
  output: {
    filename: '[name]-[hash].js',
    chunkFilename: './static/js/[name].chunk.js',
    path: resolve('/dist'),
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      STYLE: resolve('src/style'),
      CONSTANTS: resolve('constants'),
    },
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'sass-loader'],
        }),
      },
      {
        test: /\.(s)?css$/,
        exclude: /node_modules|dist/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'sass-loader'],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // Specify the common bundle's name.
    }),
    new ExtractTextPlugin('static/css/styles.css'),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
