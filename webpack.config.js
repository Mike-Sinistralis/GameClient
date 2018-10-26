const path = require('path');

const config = {
  mode: 'development',
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
    modules: ['./src', './node_modules'],
    extensions: [
      '.js',
    ],
  },
  entry: {
    vendor: ['phaser', 'socket.io-client'],
    main: path.join(__dirname, './src/index.js'),
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
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 3100,
    compress: true,
  },
}

module.exports = config;
