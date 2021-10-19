const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = require('./webpack.common').createConfig({
  target: 'client',
});

module.exports = ({ development }) => {
  return {
    ...config,
    mode: development ? 'development' : 'production',

    output: {
      ...config.output,
      publicPath: '/client/',
      assetModuleFilename: 'client/assets/[name][ext]',
    },

    module: {
      ...config.module,

      rules: [
        ...config.module.rules,

        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      ...config.plugins,

      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
  };
};
