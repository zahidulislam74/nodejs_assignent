const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    let data = fs.readFileSync("./public/home.html", "utf8");
    res.end(data);
  } else if (req.url == "/about") {
    let data = fs.readFileSync("./public/about.html", "utf8");
    res.end(data);
  } else if (req.url == "/contact") {
    let data = fs.readFileSync("./public/contact.html", "utf8");
    res.end(data);
  } else {
    res.end("404 file not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
