const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact } = require('./utils/contact')
const { body, validationResult, check } = require('express-validator')

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')) // built in middleware
app.use(express.urlencoded({extended: true}));

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
  res.render('index', { 
    layout: 'layouts/main-layouts', 
    nama: 'Ismail', 
    title: 'Home', 
    mahasiswa 
  }); // nanti ini akan mencari file bernama index
});

app.get('/about', (req, res) => {
  res.render('about', { 
    layout: 'layouts/main-layouts', 
    title: 'About' 
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', { 
    layout: 'layouts/main-layouts', 
    title: 'Contact', 
    contacts
  });
});

// Screen Form Contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Add Contact',
    layout: 'layouts/main-layouts'
  })
})

// Procees Data Contact
app.post('/contact', [
  check('email', 'Email tidak valid!').isEmail(), 
  check('noHP', 'Nomor HP tidak valid!').isMobilePhone('id-ID')
] ,(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  // addContact(req.body);
  // res.redirect('/contact')
})

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', { 
    layout: 'layouts/main-layouts', 
    title: 'Detail', 
    contact
  });
});

// method use akan dijalankan di setiap route tidak ditemukkan
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
