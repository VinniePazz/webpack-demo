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
} = require("./constants.js");

/*********************** CONFIG ***********************/
module.exports = (env) => {
  // В функции мы можем делать что угодно
  const config = {
    mode: "development",
    context: SRC_DIRECTORY,
    entry: {
      main: "./index.js",
      // test: "./test.js",
    },
    output: {
      filename: "[name].[hash].js",
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
