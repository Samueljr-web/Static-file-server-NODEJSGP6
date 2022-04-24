var http = require("http");
fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Nodejs");
  })
  .listen(8080);
