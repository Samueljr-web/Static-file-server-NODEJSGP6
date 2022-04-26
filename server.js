var http = require("http");
var fs = require("fs");

const host = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res) {
  const urlPath = req.url;

  if (urlPath === "/") {
    fs.readFile("./pages/index.html", (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    });
  } else if (urlPath === "/about") {
    fs.readFile("./pages/about.html", (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    });
  } else if (urlPath === "/sys") {
    fs.readFile("osinfo.json", "samuel", (err, content) => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("Your OS info has been saved successfully!");
    });
  } else {
    fs.readFile("./pages/404.html", (err, content) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    });
  }
});
server.listen(port, host, () => {
  console.log(`Your Server is Running at ${host}:${port}`);
});
