const http = require("http");
const fs = require("fs");
const port = 3000;

// Method untuk pindah screen HTML
function routeScreen(path, res) {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("404 not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
}

http
  .createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    switch (url) {
      case "/about":
        routeScreen("./about.html", res);
        break;
      case "/contact":
        routeScreen("./contact.html", res);
        break;
      default:
        routeScreen("./index.html", res);
    }
    /* if (url === "/about") {
    } else if (url === "/contact") {
    } else {
      // res.write("<h1>Halo Dunia</h1>");
    } */
  })
  .listen(port, () => {
    console.log(`Server is running in port ${port}`);
  });
