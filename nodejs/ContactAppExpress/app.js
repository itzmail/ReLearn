const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;


// menggunakan Templeting View EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  const mahasiswa = [
    {
      nama: 'Ismail Nur Alam',
      email: 'ismailnuralam@imaco.com'
    },
    {
      nama: 'Manap Antam',
      email: 'manapanap@imaco.com'
    },
    {
      nama: 'OKej',
      email: 'okejadi@imaco.com'
    },
  ]
  res.render('index', { layout: 'layouts/main-layouts', nama: 'Ismail', title: 'Home', mahasiswa }); // nanti ini akan mencari file bernama index
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'layouts/main-layouts', title: 'About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'layouts/main-layouts', title: 'Contact' });
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
