const path = require("path");
console.log(path.resolve(__dirname, "dist"));

module.exports = {
  entry: {
    main: "./src/index.js",
    test: "./src/test.js"
  },
  target: "node",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
