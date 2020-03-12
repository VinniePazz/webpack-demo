const { exec } = require("child_process");

// const result = ["cls-1", "cls-2", false].reduce((acc, current) => {
//   if (current) {
//     return acc + current + " ";
//   } else {
//     return acc;
//   }
// }, "");

// console.log(result + "hello");

console.log(process.argv);
console.log(exec);
