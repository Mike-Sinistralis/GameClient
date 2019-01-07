const path = require('path');

const config = {
  mode: 'development',
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
    ]
  },
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.css',
    ],
  },
  entry: {
    main: path.join(__dirname, './src/index.jsx'),
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
