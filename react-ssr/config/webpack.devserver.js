const path = require('path');
const config = require('./webpack.common').createConfig({
  target: 'server',
});

const devServer = (isDev) => {
  return !isDev
    ? {}
    : {
        devServer: {
          open: true,
          port: 3000,
          historyApiFallback: true,
          contentBase: path.join(__dirname, 'public'),
        },
      };
};

module.exports = ({ development }) => {
  return {
    ...config,
    mode: development ? 'development' : 'production',

    module: {
      ...config.module,

      rules: [
        ...config.module.rules,

        {
          test: /\.css$/i,
          use: 'null-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: 'null-loader',
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'null-loader',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'null-loader',
        },
      ],
    },
    ...devServer(development),
    externals: {
      express: 'commonjs express',
      react: 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom',
    },
  };
};
