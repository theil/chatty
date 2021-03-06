/*
 ./webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, {loader: 'css-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
