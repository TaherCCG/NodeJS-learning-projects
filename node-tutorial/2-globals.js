// Globals are available in all files

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

//  console.log is a global object
console.log(__dirname);
console.log(__filename);

//  setTimeout is a global object
setTimeout(() => {
  console.log("Hello, World!");
}, 1000);

//  setInterval is a global object
// setInterval(() => {
//   console.log("Hello, from Taher!");
// }, 1000);

//  clearInterval is a global object
//  clearInterval stops the setInterval function
const interval = setInterval(() => {
  console.log("Hello, from Taher!");
}, 1000);

clearInterval(interval);
