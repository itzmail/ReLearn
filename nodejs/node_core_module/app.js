const addContact = require('./addContact');

async function main() {
  const nama = await addContact.generalQuestion("Masukkan Nama mu : ");
  const noHp = await addContact.generalQuestion("Masukkan No Telepon mu : ");
  const email = await addContact.emailQuest();

  addContact.simpanContact(nama, noHp, email);
}

main();
