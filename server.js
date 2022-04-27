var http = require("http");
var fs = require("fs");
const os = require("os");

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const urlPath = req.url;
  const osData = [
    {
      hostname: os.hostname(),
      platform: os.platform(),
      architecture: os.arch(),
      numberOfCPUS: os.cpus(),
      networkInterfaces: os.networkInterfaces(),
      uptime: os.uptime(),
    },
  ];

  const osinfoJSON = JSON.stringify(osData);
  const osObject = JSON.parse(osinfoJSON);
  const dataJSON = JSON.stringify(osObject);

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
    fs.readFile("osinfo.json", (err, content) => {
      fs.writeFileSync("osinfo.json", dataJSON);
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end(content, "utf-8");
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
