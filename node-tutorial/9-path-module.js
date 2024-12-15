// Path Module - File Path Module
const path = require("path");

// path separator
console.log(path.sep);

// path delimiter
console.log(path.delimiter);

// file path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base file name
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

// more path methods

// path.dirname()
path.dirname(absolute);
console.log(path.dirname(absolute));

// path.extname()
path.extname(absolute);
console.log(path.extname(absolute));
