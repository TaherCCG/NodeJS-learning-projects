const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    // Blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Here is our short history");
  } else {
    res.end("Error 404");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
