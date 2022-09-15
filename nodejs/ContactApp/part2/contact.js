const fs = module.require('fs');
const chalk = module.require('chalk');
const validator = module.require('validator');

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

function saveContact({nama, email, noHP}) {
    const contact = {nama, email, noHP}

    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    // Cek Duplikat name
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
      console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"));
      return false;
    }
    
    // cek format email
    if(email) {
      if(!validator.isEmail(email)){
        console.log(chalk.red.inverse.bold("Email tidak valid!"));
        return false;
      }
    }

    // cek format no hp
    if(!validator.isMobilePhone(noHP, 'id-ID')){
      console.log(chalk.red.inverse.bold("nomor hp tidak valid!"));
      return false;
    }
  
    contacts.push(contact);
  
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  
    console.log(chalk.green.inverse.bold('terimakasih sudah memasukkan data.'));
}

module.exports = { saveContact }