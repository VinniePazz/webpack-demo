const { resolve } = require("path");
const { path: PROJECT_ROOT } = require("app-root-path");

const SRC_DIRECTORY = resolve(__dirname, "../../src");
const BUILD_DIRECTORY = resolve(__dirname, "../../build");

const PORT = 3000;
const HOST = "localhost";

module.exports = {
  PORT,
  HOST,
  PROJECT_ROOT,
  SRC_DIRECTORY,
  BUILD_DIRECTORY,
};
