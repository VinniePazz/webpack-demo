// Core
const path = require("path");

// Plugins
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Constants
const {
  SRC_DIRECTORY,
  BUILD_DIRECTORY,
  PROJECT_ROOT,
} = require("./constants.js");
console.log(PROJECT_ROOT);
/*********************** CONFIG ***********************/

module.exports = (env) => {
  // В функции мы можем делать что угодно
  const config = {
    mode: "development",
    context: SRC_DIRECTORY,
    entry: {
      main: "./index.js",
      test: "./test.js",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIRECTORY,
    },
    resolve: {
      extensions: [".js", ".json", ".jpg"],
      alias: {
        "@src": SRC_DIRECTORY,
      },
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    // Каждый плагин - это конструктор
    plugins: [
      new HTMLWebpackPlugin({
        template: "./index.html",
        title: "Изучаем вебпак 🎯",
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          use: ["file-loader"],
        },
        {
          test: /\.xml$/,
          use: ["xml-loader"],
        },
        {
          test: /\.csv$/,
          use: ["csv-loader"],
        },
      ],
    },
  };

  return config;
};
