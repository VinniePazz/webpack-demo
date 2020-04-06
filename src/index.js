import "./styles/main.css";

console.log("hot");

if (module.hot) {
  module.hot.accept("./test", () => {
    console.log("do something");
  });
}
