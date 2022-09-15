const yargs = module.require("yargs");
const { saveContact } = module.require('./contact');

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
});

yargs.parse();


/* 

const main = async () => {
  const nama = await questionContact("Masukkan nama anda : ");
  const email = await questionContact("Masukkan email anda : ");
  const noHP = await questionContact("Masukkan noHP anda : ");

  saveContact({nama: nama, email: email, noHP: noHP});
}

main(); */