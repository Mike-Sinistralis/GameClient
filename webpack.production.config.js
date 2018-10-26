const path = require('path');

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(options.dirname, 'src'), 'node_modules'],
    extensions: [
      '.js',
    ],
  },
  entry: {
    vendor: ['phaser', 'socket.io-client'],
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
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
      chunks: 'all',
    },
    runtimeChunk: true
  }
}

module.exports = config;
