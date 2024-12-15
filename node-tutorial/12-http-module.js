// http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to Home</a>
    `);
});

server.listen(5000);

/*
  run the server by typing 'node 12-http-module.js' in the terminal
  open the browser and go to 'http://localhost:5000'

createServer method takes a callback function with two arguments: req and res
req: request object, res: response object
req.url: url that user is trying to access
res.end: method to send a response back to the client
res.write: method to send a response back to the client
server.listen: method to start the server.
*/
