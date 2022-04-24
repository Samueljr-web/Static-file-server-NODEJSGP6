var http = require("http");
fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile(index.html + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(json.stringify(err));
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello Nodejs");
    });
  })
  .listen(8080);
