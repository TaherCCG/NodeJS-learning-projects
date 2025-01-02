// FS Module - File System Module (async)
const { readFile, writeFile } = require("fs");

// read files
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result of the written files: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
/*
ASYNC
The above code is asynchronous, meaning that the code is non-blocking.
The readFile() method reads the contents of a file asynchronously.
The writeFile() method writes data to a file asynchronously.
The callback function is executed once the operation is complete.
The callback function takes two arguments: an error object and the result.
The error object is null if the operation was successful.
The result is the data read from the file or the data written to the file.
*/
