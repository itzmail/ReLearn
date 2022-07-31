const {saveContact, questionContact} = require('./contact');

const main = async () => {
  /* const nama = await quest1();
  const email = await quest2();
  const noHP = await quest3(); */
  const nama = await questionContact("Masukkan nama anda : ");
  const email = await questionContact("Masukkan email anda : ");
  const noHP = await questionContact("Masukkan noHP anda : ");

  saveContact({nama: nama, email: email, noHP: noHP});
}

main();