const { mergeWith, isArray } = require('lodash');

const { getDevWebpack } = require('./dev');
const { getCommonWebpack } = require('./common');
const { buildPlugins } = require('./plugins');

function mergeConfigs(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }

  // Lodash expects this if the customzer doesn't handle the specific case.
  return undefined;
}

function buildConfig(options) {
  const envConfig = options.isDev ? getDevWebpack(options) : {};
  const commonConfig = getCommonWebpack(options);

  const mergedConfig = mergeWith(envConfig, commonConfig, mergeConfigs);

  const plugins = buildPlugins(options);

  return Object.assign({}, mergedConfig, plugins);
}

module.exports = {
  buildConfig,
};
