const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function buildDefinePlugin({ isLocal }) {
  let nodeEnv;

  if (isLocal) {
    nodeEnv = 'DEVELOPMENT';
  } else {
    nodeEnv = 'PRODUCTION';
  }

  const defines = {
    NODE_ENV: nodeEnv,
  };

  return {
    'process.env': defines,
  };
}

function buildHtmlPlugin() {

  // Fix edge being jank
  function fixEdgeFetch() {
    // eslint-disable-next-line no-undef
    const isEdge = /Edge\//.test(navigator.userAgent);
    if (isEdge) window.fetch = undefined;
  }

  const htmlData = {
    filename: path.join(__dirname, 'dist/index.html'),
    bundleName: 'main.js',
    vendorName: 'vendor.js',
    inject: false,
    template: path.join(__dirname, 'template.html'),
    projectName,
    fixEdgeFetch,
  };

  return htmlData;
}

function buildPlugins(options) {
  const plugins = [
    new webpack.DefinePlugin(buildDefinePlugin(options)),
    new HtmlWebpackPlugin(buildHtmlPlugin(options)),
  ];

  if (options.isLocal) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    plugins,
  };
}

module.exports = {
  buildPlugins,
};
