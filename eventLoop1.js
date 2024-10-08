const fs = require("fs");

let a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading CB");
});
setTimeout(() => {
  console.log("Timer Expired");
}, 0);

process.nextTick(() => console.log("hii"));

function printA() {
  console.log("a=", a);
}
printA();

console.log("Last line executed");
