const express = require("express");
const app = express();
const port = 3000;

// menggunakan Templeting View EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [];
  res.render("index", { nama: "Ismail", title: "Home", mahasiswa }); // nanti ini akan mencari file bernama index
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// with params
app.get("/product/:id", (req, res) => {
  res.send(
    `Produk id : ${req.params.id} <br> Category : ${req.query.category} `
  ); // query category dibuat untuk memanggil params langsung dari link yang kita ketik
});

// method use akan dijalankan di setiap route tidak ditemukkan
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
