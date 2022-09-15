const yargs = module.require("yargs");
const { saveContact, listContacts, detilContact, deleteContact } = module.require('./contact');

yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Masukkan email',
      demandOption: true,
      type: 'string'
    },
    noHP: {
      describe: 'Nomor Handphone',
      demandOption: false,
      type: 'string'
    },
  },
  handler(argv) {
    saveContact({nama: argv.nama, email: argv.email, noHP: argv.noHP,})
  }
}).demandCommand();

// Menampilkan list kontak

yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama & no HP contact',
  handler() {
    listContacts();
  }
});

// Menampilkan detil sebuah kontak

yargs.command({
  command: 'detil',
  describe: 'Menampilkan detil kontak berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    detilContact(argv.nama)
  }
});

// Menghapus sebuah kontak berdasarkan nama

yargs.command({
  command: 'delete',
  describe: 'Menghapuskan kontak berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    deleteContact(argv.nama)
  }
});

yargs.parse();