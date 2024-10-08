const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

fs.readFile("./file.txt", "utf8", () => {
  setImmediate(() => console.log("2 setImmediate"));

  setTimeout(() => {
    console.log("2 Timer Expired");
  }, 0);
  process.nextTick(() => console.log("2 nextTick"));

  console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line executed");
