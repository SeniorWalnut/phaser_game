const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets') 
    }
  },
  devServer: {
  	contentBase: resolve(__dirname, 'dist'),
  	port: 8080,
  	compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phaser game'
    })
  ]
};