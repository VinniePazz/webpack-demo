// import test from "./test";
import "./styles/main.css";
import test from "./test";

console.log("hot");

if (module.hot) {
  module.hot.accept("./test", () => {
    console.log("do something");
  });
}
