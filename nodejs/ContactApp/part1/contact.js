const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

/* Membuat Promise */
 
const questionContact = (quest) => {
  return new Promise((resolve, reject) => {
    rl.question(quest, (answer) => {
      resolve(answer)
    })
  })
}

function saveContact({nama, email, noHP}) {
    const contact = {nama, email, noHP}

    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
  
    contacts.push(contact);
  
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  
    console.log('terimakasih sudah memasukkan data.');
    rl.close();
}

module.exports = {questionContact, saveContact}