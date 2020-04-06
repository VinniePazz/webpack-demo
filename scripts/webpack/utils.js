const detect = require("detect-port");
const inquirer = require("inquirer");

exports.choosePort = async (defaultPort) => {
  const port = await detect(defaultPort);
  if (port == defaultPort) {
    return defaultPort;
  } else {
    const question = {
      type: "confirm",
      name: "accepted",
      default: true,
      message: `The port ${defaultPort} has already been used. Do you want to start server on another port?`,
    };
    const confirmation = await inquirer.prompt([question]);
    return confirmation["accepted"] ? port : null;
  }
};
