# Node Web Server

``` javascript
const http = require("http");
const fs = require("fs");
const port = 3000;
```

di atas kita import 2 module dari `node core module`.

1. http => digunakan untuk tools web server mulai dari kita bisa get screen lain atau modifikasi website
2. fs => sudah dibahas sebelumnya sebagai modifikasi fileSystem

``` javascript
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
  })
  .listen(port, () => {
    console.log(`Server is running in port ${port}`);
  });
```

### Contoh di atas merupakan implementasi dari kegunaan module http jadi

jadi kasus yang ada diatas kita mau buat server local dengan port 3000. dimana server tersebut digunakan untuk menghubungkan antar file HTML.

di `.createServer()` memiliki parameter callback function yang di dalam callback function tersebut memiliki 2 parameter yaitu ***request*** dan ***response*** 

info lenkap bisa kunjungi [Doc CreateServer]('https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener')