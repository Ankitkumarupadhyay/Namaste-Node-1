const crypto = require("node:crypto");
console.log("start");

//Synchronous function will block the main main thread never use it

// crypto.pbkdf2Sync("password", "salt", 50000, 10, "sha512");
// console.log("Sync key generated");

crypto.pbkdf2("password", "salt", 50000, 10, "sha512", (err, key) => {
  console.log("Key generated");
});

function calculateMultiply(a, b) {
  const result = a * b;
  return result;
}

let c = calculateMultiply(5, 20);
console.log(c);
