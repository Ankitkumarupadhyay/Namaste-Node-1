const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 6;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 crypyo Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 crypyo Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 crypyo Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 crypyo Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 crypyo Generated");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("6 crypyo Generated");
});
