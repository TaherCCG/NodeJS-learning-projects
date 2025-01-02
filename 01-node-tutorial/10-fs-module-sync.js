// FS Module - File System Module (Sync)
const { readFileSync, writeFileSync } = require("fs");

// read files
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// write files
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} ${second}`,
  { flag: "a" }
);

const result = readFileSync("./content/result-sync.txt", "utf8");

console.log(result);

/*
SYNC
The synchronous code is blocking, meaning that the code is executed in sequence.
The readFileSync() method reads the contents of a file synchronously.
The writeFileSync() method writes data to a file synchronously.
The code is executed in sequence, so the result is written to the file before the code continues.
The synchronous code is easier to read and write, but it is not recommended for performance-critical applications.
The synchronous code is blocking, meaning that the code is executed in sequence.
*/
