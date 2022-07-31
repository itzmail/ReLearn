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

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  
  return contacts;
}

function saveContact({nama, email, noHP}) {
    const contact = {nama, email, noHP}

    const contacts = loadContact();

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
  
  const listContacts = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak: '));
    
    contacts.forEach((contact, i) => {
      console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
  }
  
  const detilContact = (nama) => {
    const contacts = loadContact();
    
    const detil = contacts.find((contact) => contact.nama.toLowerCase() == nama.toLowerCase());
    if(!detil) {
      console.log(chalk.red.inverse.bold("Nama tidak ditemukkan!"));
      return false
    } else {
      console.log(chalk.green.inverse.bold('Detil Kontak: '));
      console.log(detil)
    }
}

  const deleteContact = (nama) => {
    const contacts = loadContact();
    
    const deleteContact = contacts.filter((contact) => contact.nama.toLowerCase() != nama.toLowerCase());
    if(!deleteContact) {
      console.log(chalk.red.inverse.bold("gagal menghapus kontak!"));
      return false
    } else {
      fs.writeFileSync('data/contact.json', JSON.stringify(deleteContact));
      console.log(chalk.green.inverse.bold(`Berhasil menghapus kontak ${nama}`));
    }

  }

module.exports = { saveContact, listContacts, detilContact, deleteContact }