const { resolve } = require("path");

const PROJECT_ROOT = resolve(__dirname, "../..");
const SRC_DIRECTORY = resolve(__dirname, "../../src");
const BUILD_DIRECTORY = resolve(__dirname, "../../dist");

module.exports = {
  PROJECT_ROOT,
  SRC_DIRECTORY,
  BUILD_DIRECTORY,
};
