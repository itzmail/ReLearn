const addContact = require('./addContact');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor Handphone',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
   addContact.simpanContact(argv.nama, argv.email, argv.noHP);
  }
});

yargs.parse();

/* async function main() {
  const nama = await addContact.generalQuestion("Masukkan Nama mu : ");
  const noHp = await addContact.generalQuestion("Masukkan No Telepon mu : ");
  const email = await addContact.emailQuest();

  addContact.simpanContact(nama, noHp, email);
}

main(); */
