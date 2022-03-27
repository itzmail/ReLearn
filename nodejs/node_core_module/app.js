const fs = require('fs');
const validator = require('validator');

// console.log(fs);

// Menuliskan secara asynchronous
/* fs.writeFile('data/test.txt', 'Hello World Secara asynchronous.', e => console.log(e)); */ // bila terdapat file yang sama maka akan ditimpa isinya


// Membaca isi file
// synchornous
/* const data = fs.readFileSync('data/test.txt', 'utf-8'); */
// console.log(data);

//asynchronous
/* fs.readFile('data/test.txt', 'utf-8', (err, data) => {
  if(err) throw err;
  // console.log(data)
}) */

/*
  * Kita cek terlebih dahulu apakah file yang akan kita input ada tersebut
  * Kita bisa menggunakan method existSync pada fs
*/

// Kita buat folder data bila tidak ada folder data
if(!fs.existsSync('data')) {
  fs.mkdirSync('data');
}

// Kita buat file contacts.json bila tidak file tersebut
if(!fs.existsSync('data/contacts.json')){
  fs.writeFileSync('data/contacts.json', '[]', 'utf-8');
}

/*
  * kita bisa memasukkan input di dalam terminal
  * menggunakan readLine
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generalQuestion = question => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });    
  })
}

const question2 = quesetion => {
  return new Promise((resolve, reject) => {
    rl.question("Email mu apa : ", (answer) => {
      if(validator.isEmail('foo@bar.com')){
        resolve(answer);
      } else {
        resolve(null);
      }
    });    
  })
}

async function main() {
  const nama = await generalQuestion("Masukkan Nama mu : ");
  const noHp = await generalQuestion("Masukkan No Telepon mu : ");
  const email = await question2();

  const contact = {nama, email};
  const file = fs.readFileSync("data/contacts.json", 'utf-8');
  const contacts = JSON.parse(file);
    
  contacts.push(contact);
    
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  rl.close(); // harus diberi close() agar tidak terjadi hang.....
}

main();

// studi kasus 
/*
  1. Jadi pertama kita memasukkan input di terminal
  2. Lalu kita simpan input di terminal itu di file yang bernama contact.json
*/
// rl.question('Siapa namamu?', (nama) => {
//   // TODO: Log the answer in a database
//   rl.question('Nomor Telepon mu berapa?', (nomor) => {
//   })
// });
