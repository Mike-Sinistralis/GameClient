const path = require('path');

function getCommonWebpack(options) {
  const jsxLoaders = [];

  if (options.isLocal) {
    jsxLoaders.push('react-hot-loader/webpack');
  }

  jsxLoaders.push('babel-loader');

  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: [
            'url-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(options.dirname, 'src'), 'node_modules'],
      extensions: [
        '.js',
        '.jsx',
        '.scss',
        '.css',
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: 'vendor',
            enforce: true
          },
        },
      },
      runtimeChunk: true
    },
  };
}

module.exports = {
  getCommonWebpack,
};
