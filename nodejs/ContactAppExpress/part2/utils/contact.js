const fs = module.require('fs');
/* const chalk = module.require('chalk');
const validator = module.require('validator'); */

/* Cek Folder */
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

/* Cek ada contact.json */
const dataPath = "./data/contact.json";
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

/* Get all contact.json */
const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  
  return contacts;
}

/* Find contact by name */
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(contact => contact.nama.toLowerCase() == nama.toLowerCase());

  return contact;
}

/* Untuk save atau menimpa file contacts.json */
const saveContact = (contact) => {
  fs.writeFileSync('data/contact.json', JSON.stringify(contact))
}

/* Add Contact */
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContact(contacts);
}

// Cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find(e => e.nama === nama);
}

module.exports = { loadContact, findContact, addContact, cekDuplikat }