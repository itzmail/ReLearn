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

module.exports = { loadContact, findContact }