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
});

// method use akan dijalankan di setiap route tidak ditemukkan
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});