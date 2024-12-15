// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-first-module");
const sayHi = require("./5-utils");
const data = require("./6-alternative-syntax");

console.log(data);
console.log(data.items);
console.log(data.items[2]);
console.log(data.singlePerson);
console.log(data.singlePerson.name);

console.log(names);
console.log(names.john);

const { john, peter } = names;

sayHi("Susan");
sayHi(john);
sayHi(peter);

// 7-mind-grenade.js is executed although it is not imported in this file like the other modules.
// The function in 7-mind-grenade.js is executed because it is called in this file.
// This is because the function is not assigned to a variable and is not exported from 7-mind-grenade.js.
// The function is executed as soon as the file is imported in this file.

require("./7-mind-grenade");

// if the require statemnet was at the begining of this file, the function would have executed as soon as the file was run in the terminal before the console.log statements from line 8.
