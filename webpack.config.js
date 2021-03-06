const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test:/\.(s*)css$/,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new miniCss({
       filename: 'style.css',
    }),
    new ESLintPlugin()
  ],
};