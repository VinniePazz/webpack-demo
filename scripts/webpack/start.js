// Core
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const chalk = require("chalk"); // Раскрашивание консоли

// Webpack config
const getDevConfig = require("./config/webpack.dev");

// Constants
const { HOST, PORT, BUILD_DIRECTORY } = require("./constants.js");

// Utils
const { choosePort } = require("./utils");

// IIFE starts webpack dev server

(async () => {
  try {
    const choosenPort = await choosePort(PORT); // in case default port is using already -> we ask user for a new port

    if (!choosenPort) {
      console.log("\n❌ Server starting has been rejected by user");
      return;
    }

    const config = getDevConfig();

    const options = {
      port: choosenPort,
      host: HOST,
      hot: true, // HMR
      quiet: true,
      noInfo: true,
      overlay: true,
      clientLogLevel: "silent",
      historyApiFallback: true,
      publicPath: "/build/", // fix issue with webpack dev server when output filename not descriptor
      contentBase: BUILD_DIRECTORY,
    };

    const compiler = webpack(config);

    webpackDevServer.addDevServerEntrypoints(config, options); // for HMR

    const server = new webpackDevServer(compiler, options);

    server.listen(choosenPort, HOST, () => {
      console.log(
        `${chalk.greenBright("➡  Server listening on")} ${chalk.blueBright(
          `http://${HOST}:${choosenPort}`
        )}`
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
