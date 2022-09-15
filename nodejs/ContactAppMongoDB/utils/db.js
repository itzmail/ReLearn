const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/study_mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Membuat Schema
// Difolder ../model

/* // Menambah 1 Data
const contact1 = new Contact(
    {
        nama: "Juang Idolaku",
        nohp: '08987654321',
        email: 'Juang@mantap.com'
    }
);

// Simpan ke collection
contact1.save().then(res => console.log(res)).catch(err => console.error(err)) */