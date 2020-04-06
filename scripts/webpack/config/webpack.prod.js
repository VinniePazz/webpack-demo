// Core modules
const path = require("path");

// Third-party modules
const merge = require("webpack-merge");

// Plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Constants

// Common config
const getCommonConfig = require("./webpack.common");

/*********************** PRODUCTION CONFIG ***********************/

module.exports = (env) => {
  // В функции мы можем делать что угодно
  const prodConfig = merge(getCommonConfig(), {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
  });

  return prodConfig;
};
