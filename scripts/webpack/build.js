// Core
const webpack = require("webpack");
const chalk = require("chalk"); // Раскрашивание консоли

// Config
const getProdConfig = require("./config/webpack.prod");

const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
  if (error) {
    // configuration error
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return;
  }

  const info = stats.toString({
    hash: true,
    errors: true,
    colors: true,
    modules: false,
    entrypoints: false,
  });

  console.log(chalk.greenBright("✔ Build completed\n"));
  console.log(info);

  if (stats.hasErrors()) {
    // Errors in compilation time (bad import, syntax error, etc)
    console.log(chalk.redBright("❌ Error"));
  }

  if (stats.hasWarnings()) {
    // Warnings in compilation time
    console.log(chalk.yellowBright("⚠ Warning"));
  }
});
