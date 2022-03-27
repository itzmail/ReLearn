const fs = require('fs');

// console.log(fs);

// Kita bisa menampung error, ini khusus untuk synchornous, untuk asynchronous error tersebut akan ditampung di callback
try{
  fs.writeFileSync("data/test.txt", "Hello World secara synchornous!");
} catch(e){
  console.log(e);
}

// Menuliskan secara asynchronous
fs.writeFile('data/test.txt', 'Hello World Secara asynchronous.', e => console.log(e)); // bila terdapat file yang sama maka akan ditimpa isinya


// Membaca isi file
// synchornous
const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//asynchronous
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
  if(err) throw err;
  // console.log(data)
})

/*
  * kita bisa memasukkan input di dalam terminal
  * menggunakan readLine
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// studi kasus 
/*
  1. Jadi pertama kita memasukkan input di terminal
  2. Lalu kita simpan input di terminal itu di file yang bernama contact.json
*/
rl.question('Siapa namamu?', (nama) => {
  // TODO: Log the answer in a database
  rl.question('Nomor Telepon mu berapa?', (nomor) => {
    const contact = {nama, nomor};
    const file = fs.readFileSync("data/contacts.json", 'utf-8');
    const contacts = JSON.parse(file);
    
    contacts.push(contact);
    
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    rl.close(); // harus diberi close() agar tidak terjadi hang.....
  })
});
