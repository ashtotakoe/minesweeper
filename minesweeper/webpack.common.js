const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const CopyPlugin = require('copy-webpack-plugin'); */

const PROJECT = {
  title: 'minesweeper',
  lang: 'en',
  isEmptyBodyRequired: true,
};

const getTemplate = (subtitle) => `<!DOCTYPE html>
<html lang="${PROJECT.lang}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${PROJECT.title}${subtitle ? ' | ' + subtitle : ''}</title>
  </head>
  <body class="body">${PROJECT.isEmptyBodyRequired ? '' : '\n    <div class="root" id="root"></div>'}
  </body>
</html>`;

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },

  plugins: [
    new ESLintPlugin({ extensions: ['js'] }),
    new HtmlWebpackPlugin({
      templateContent: getTemplate(),
      fileName: 'index.html',
      favicon: path.resolve('src', 'assets', 'icons', 'favicon.webp'),
      chunks: ['app'],
    }),
    /* new CopyPlugin({ patterns: [{ from: './src/assets/folder', to: './assets/folder' }] }), */
  ],

  module: {
    rules: [
      { test: /\.(css|s[ac]ss)$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|mp3)$/i, type: 'asset' },
    ],
  },

  resolve: { extensions: ['.js', '...'] },
};
