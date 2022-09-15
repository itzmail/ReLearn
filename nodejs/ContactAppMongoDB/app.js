const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const {body, validationResult, check} = require('express-validator');
const methodOverride = require("method-override");

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');
const { findOne } = require('./model/contact');

const app = express();
const port = process.env.PORT || 3000;

// Setup method override
app.use(methodOverride('_method'));

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')) // built in middleware
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

// Halaman Home
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

// Halaman about
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layouts',
        title: 'About'
    });
});


// Halaman Contact
app.get('/contact', async (req, res) => {
    const contacts = await Contact.find();

    res.render('contact', {
        layout: 'layouts/main-layouts',
        title: 'Contact',
        contacts,
        msg: req.flash('msg')
    });
});

// Add Contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Add Contact',
        layout: 'layouts/main-layouts'
    })
})

// Procees Add Data Contact
app.post('/contact', [
    body('nama').custom(async (value) => {
        const duplikat = await Contact.findOne({nama: value});
        if (duplikat) {
            throw new Error("Nama contact sudah digunakan!!")
        }
        return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('nohp', 'Nomor HP tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('add-contact', {
            title: 'Form Add Contact',
            layout: 'layouts/main-layouts',
            errors: errors.array()
        })
    } else {
        Contact.insertMany([req.body], (err, result) => {
            req.flash('msg', 'Data contact berhasil ditambahkan!');
            res.redirect('/contact');
        })
    }
})

// Delete Contact
/* app.get('/contact/delete/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });
      if(!contact) {
        res.status(404);
        res.send('<h1>404</h1>')
      } else {
        Contact.deleteOne({_id: contact._id}).then(result => {
            req.flash('msg', 'Data contact berhasil dihapus!');
            res.redirect('/contact')
        }).catch(err => {
            console.log(err)
        })
      }
  }); */
app.delete('/contact', (req, res) => {
    Contact.deleteOne({nama: req.body.nama}).then(result => {
        req.flash('msg', 'Data contact berhasil dihapus!');
        res.redirect('/contact')
    }).catch(err => {
        console.log(err)
    })
})

// Edit contact
app.get('/contact/edit/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });
    res.render('edit-contact', {
      title: ' Form Ubah Data Contact',
      layout: 'layouts/main-layouts',
      contact
    })
  })

// Proccess update Data
app.put('/contact', [
    body('nama').custom(async (value, {req}) => {
      const duplikat = await Contact.findOne({nama: value});
      if(value !== req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!!")
      }
      return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('nohp', 'Nomor HP tidak valid!').isMobilePhone('id-ID')
  ] ,(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      res.render('edit-contact', {
        title: 'Form Edit Contact',
        layout: 'layouts/main-layouts',
        errors: errors.array(),
        contact: req.body
      })
    } else {
        Contact.updateOne(
            { _id: req.body._id},
            {
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    nohp: req.body.nohp,
                }
            }
        ).then(result => {
            // kirimkan flash message
            req.flash('msg', 'Data contact berhasil diubah!');
            res.redirect('/contact')
        })
    }
  })  

// Halaman Detil contact
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });
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
    console.log(`Example app listening http://localhost:${port}`)
});

