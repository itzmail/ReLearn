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

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  
  return contacts;
}

module.exports = { loadContact }