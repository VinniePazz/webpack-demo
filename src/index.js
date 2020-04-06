import "./child";

console.log("hot");

if (module.hot) {
  module.hot.accept("./child", () => {
    console.log("do something");
  });
}
