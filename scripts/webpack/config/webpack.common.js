// Core
const path = require("path");

// Plugins
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Constants
const {
  SRC_DIRECTORY,
  BUILD_DIRECTORY,
  PROJECT_ROOT,
} = require("../constants.js");

/*********************** COMMON CONFIG ***********************/

module.exports = (env) => {
  const commonConfig = {
    mode: "none",
    context: SRC_DIRECTORY,
    entry: {
      main: "./index.js",
    },
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
      publicPath: "/build/",
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./index.html",
        title: "Изучаем вебпак 🎯",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };

  return commonConfig;
};
