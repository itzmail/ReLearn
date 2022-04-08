const http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/about":
        res.write("Hello Mail");
        res.end();
      case "/contact":
        res.write("Hello Mail");
        res.end();
      default:
        res.write("Hello Mail");
        res.end();
    }
  })
  .listen(1234, () => {
    console.log("Server is running in port 1234..");
  });
