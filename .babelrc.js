module.exports = (api) => {
  api.cache.never();
  //   const env = api.env(); // TODO: figure out more
  //   api.cache.using(() => env === "development");
  return {
    presets: ["@babel/preset-env"],
  };
};
