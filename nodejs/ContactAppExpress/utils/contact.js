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

// hapus contact
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);

  saveContact(filteredContacts)
}

// mengubah contact

const updateContacts = (newContact) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== newContact.oldNama);
  // console.log('1')
  // console.log(filteredContacts)
  delete newContact.oldNama;
  // console.log('2')
  // console.log(newContact)
  filteredContacts.push(newContact);
  // console.log('3')
  // console.log(filteredContacts)
  saveContact(filteredContacts)
}

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts }