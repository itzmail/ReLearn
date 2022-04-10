const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({
    nama: "Ismail Nur Alam",
    domicile: 'Magelang',
    group: 'Java',
    division: 'IT'
  })
});

app.get('/about', (req, res) => {
  // res.send('About Screen!')
  res.sendFile('./about.html', { root: __dirname }); // dirname adalah nama folder
});

app.get('/contact', (req, res) => {
  res.send('contact Screen!')
});

// with params
app.get('/product/:id', (req, res) => {
  res.send(`Produk id : ${req.params.id} <br> Category : ${req.query.category} `); // query category dibuat untuk memanggil params langsung dari link yang kita ketik
})

// method use akan dijalankan di setiap route tidak ditemukkan
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Code di bawah menggunakan bawaan nodejs 

// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// // Method untuk pindah screen HTML
// function routeScreen(path, res) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("404 not Found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// }

// http
//   .createServer((req, res) => {
//     const url = req.url;

//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });

//     switch (url) {
//       case "/about":
//         routeScreen("./about.html", res);
//         break;
//       case "/contact":
//         routeScreen("./contact.html", res);
//         break;
//       default:
//         routeScreen("./index.html", res);
//     }
//     /* if (url === "/about") {
//     } else if (url === "/contact") {
//     } else {
//       // res.write("<h1>Halo Dunia</h1>");
//     } */
//   })
//   .listen(port, () => {
//     console.log(`Server is running in port ${port}`);
//   })