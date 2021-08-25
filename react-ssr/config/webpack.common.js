const { join } = require('path');
const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: ['js', 'jsx'] })];

function createConfig({ target }) {
  let root = join(__dirname, '../'); // \react-redux\
  let src = join(root, 'src'); // \react-redux\src
  let name = '[name].js';
  // let name = '[hash:16].js';
  // let name = '[name].[contenthash].js'; // !!!!!!
  let dist = join(root, 'dist', target); // \react-redux\dist\client

  const IS_SERVER = target === 'server';
  const IS_CLIENT = target === 'client';

  return {
    name: target,
    // entry: join(src, target),
    // entry: join(src, 'index'),
    entry: ['babel-polyfill', join(src, target)],
    // entry: ['babel-polyfill', join(src, 'index')],

    // mode: 'development',
    // mode: 'production',

    devtool: 'inline-source-map',

    output: {
      path: dist,
      filename: name,
      publicPath: '/', // !!!!!
      chunkFilename: name,
      assetModuleFilename: 'assets/[hash][ext]',
    },

    resolve: {
      modules: ['node_modules', 'src'], /// ????????
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  'babel-preset-minify',
                  {
                    builtIns: false,
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        IS_CLIENT: JSON.stringify(IS_CLIENT),
        IS_SERVER: JSON.stringify(IS_SERVER),
        'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined'),
      }),
      // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      ...esLintPlugin(null),
    ],
  };
}

module.exports = { createConfig };
