// const { x, calculateSum } = require("./calculate/sum");
// const { calculateSubtract } = require("./calculate/subtract");
// const { calculateMultiply } = require("./calculate/multiply");

const {
  calculateMultiply,
  calculateSubtract,
  calculateSum,
  x,
} = require("./calculate/app");

let a = 10;
let b = 20;

calculateSum(a, b);
calculateSubtract(a, b);
calculateMultiply(a, b);
console.log(x);
// console.log(globalThis);
