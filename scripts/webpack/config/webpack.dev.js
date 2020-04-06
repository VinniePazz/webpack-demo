// Core modules
const path = require("path");

// Third-party modules
const merge = require("webpack-merge");

// Plugins

// Constants

// Common config
const getCommonConfig = require("./webpack.common");

/*********************** DEVELOPMENT CONFIG ***********************/

module.exports = (env) => {
  // В функции мы можем делать что угодно
  const devConfig = merge(getCommonConfig(), {
    mode: "development",
    plugins: [],
    module: {
      rules: [],
    },
  });

  return devConfig;
};
