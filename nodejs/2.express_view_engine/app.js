const express = require('express')
const app = express()
const port = 3000


// menggunakan Templeting View EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
  res.render('index'); // nanti ini akan mencari file bernama index
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname }); // dirname adalah nama folder
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
});

// with params
app.get('/product/:id', (req, res) => {
  res.send(`Produk id : ${req.params.id} <br> Category : ${req.query.category} `); // query category dibuat untuk memanggil params langsung dari link yang kita ketik
});

// method use akan dijalankan di setiap route tidak ditemukkan
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});