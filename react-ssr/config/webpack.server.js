const config = require('./webpack.common').createConfig({
  target: 'server',
});

module.exports = ({ development }) => {
  return {
    ...config,

    mode: development ? 'development' : 'production',

    output: {
      ...config.output,
      publicPath: '/',
      assetModuleFilename: 'assets/[name][ext]',
    },

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
      ],
    },

    externals: {
      express: 'commonjs express',
      react: 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom',
    },
  };
};
