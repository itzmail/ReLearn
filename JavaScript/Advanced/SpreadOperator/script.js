/**
 * ? Spread Opertor
 * * Memecah iterable menjadi single element
 */

/**
 * *Yang Termasuk Iterable
 * strings
 * array
 * nodelist / arguments
 * dan masih banyak lagi
 */

// Kegunaan Spread Operator
// 1. menggabung array (sama halnya bisa digunakan dengan cara .concat())

const wishlist = ['Programmer Jago', 'Entreprenuer', 'AnakSholeh'];
const favorite = [7, 'japan', 'magelang'];

/* console.log(...wishlist); */ // dipecah menjadi tiap-tiap element

const fusion = [...wishlist, 'LP', ...favorite];
/* console.log(fusion); */

// 2. meng-copy array dengan mempertahankan keaslian itrable yang aslinya
const mhs = ['erik', 'jonny', 'agus'];
const mhs1 = [...mhs]; // dengan cara ini array yang asli 'mhs' tidak akan berubah nilainya
mhs1[1] = 'Jono';
/* console.log(mhs1); */

// 3. mengubah nodelist menjadi array
/**
 * ! Cara biasa
 */

const listMinuman = document.querySelectorAll('li');
const usuallMethod = [];
for (let i = 0; i < listMinuman.length; i++) {
  usuallMethod.push(listMinuman[i].textContent);
}
/* console.log(usuallMethod); */

const toArray = [...listMinuman].map((a) => a.textContent);
/* console.log(toArray); */

// Memunculkan perubahan transisi pada huruf <h1>JavaScript</h1>
const JavaScript = document.querySelector('#language');
const huruf = [...JavaScript.textContent]
  .map((l) => `<span>${l}</span>`)
  .join('');
JavaScript.innerHTML = huruf;
