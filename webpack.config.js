const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: resolve(__dirname, 'src/')
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
  	port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phaser game'
    }),
    new CopyPlugin([{
      from: resolve(__dirname, 'src', 'assets'),
      to: 'assets'
    }]),
  ]
};