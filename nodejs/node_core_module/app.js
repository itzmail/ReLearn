const methodContact = require("./methodContact");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Menambahkan kontak baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      methodContact.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand(); // demandCommand() => fungsinya hanya untuk memberikan alert bila kita tidak menambahkan perintah atau parameter

yargs.command({
  command: "list",
  describe: "Menampilkan semua datar nama beserta nomor hp",
  handler() {
    methodContact.listContact();
  },
});

yargs.command({
  command: "detail",
  describe: "Menampilkan satu contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    methodContact.detailContact(argv.nama);
  },
});

yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    methodContact.deleteContact(argv.nama);
  },
});

yargs.parse();

/* async function main() {
  const nama = await methodContact.generalQuestion("Masukkan Nama mu : ");
  const noHp = await methodContact.generalQuestion("Masukkan No Telepon mu : ");
  const email = await methodContact.emailQuest();

  methodContact.simpanContact(nama, noHp, email);
}

main(); */
