// Core
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const chalk = require("chalk"); // Раскрашивание консоли

// Webpack config
const getConfig = require("./webpack.config");

// Constants
const { HOST, PORT, BUILD_DIRECTORY } = require("./constants.js");

// Utils
const { choosePort } = require("./utils");

// Start webpack dev server

(async () => {
  try {
    const choosenPort = await choosePort(PORT); // in case default port is using already -> we ask user for a new port

    if (!choosenPort) {
      console.log("\n❌ Server starting has been rejected by user");
      return;
    }

    const config = getConfig();

    const options = {
      port: choosenPort,
      host: HOST,
      hot: true,
      quiet: true,
      noInfo: true,
      overlay: true,
      clientLogLevel: "silent",
      historyApiFallback: true,
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
