const path = require('path');

function getDevWebpack(options) {
  return {
    mode: 'development',
    entry: {
      [main]: [
        'whatwg-fetch',
        '@babel/polyfill',
        path.join(__dirname, './src/index.jsx'),
      ],
    },
    output: {
      path: path.join(options.dirname, 'dist'),
      publicPath: '/',
      filename: getJSName(options.appVersion),
    },
    cache: true,
    devServer: {
      hot: true,
      contentBase: path.join(options.dirname, 'dist'),
      port: 3030,
      compress: true,
      host: 'localhost',
    },
  };
}

module.exports = {
  getDevWebpack,
};
