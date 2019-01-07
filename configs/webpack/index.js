const buildConfig = require('./build');

function getWebpackConfig(options) {
  const defaults = {
    isUnitTest: true,
    isDev: true,
    port: 3030,
    host: 'localhost',
    dirname: process.cwd(),
  };

  return buildConfig(Object.assign({}, defaults, options));
}

module.exports = {
  getWebpackConfig,
};