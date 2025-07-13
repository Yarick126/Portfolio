const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')


module.exports = {
  entry: './src/app.js',
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 3000,
    compress: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Persons-cards',
      template: './src/index.html',
      filename: 'index.html',
      favicon: './public/favicon.png'
    })
  ],
  mode: 'development'
};