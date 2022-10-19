"use strict";
const anchor = document.querySelector('a');
/*Kita beri tanda seru di akhir atau sebelum titik koma
  agar ketika kita pakai variable tersebut typescript tidak membaca error,
KARENA ada kemungkinan bahwa variable anchor terjadi error

* Dan tidak perlu buat kondisi seperti di bawah ini
if(anchor){
  console.log(anchor.href);
}
*/
console.log(anchor);
// const form = document.querySelector('form')!;
/* kita beri as seperti dibawah ini adalah salah satu aturan yang ada di Typescript
Dimana kita bisa mendeklarasikan hal yang kita pilih elemen atau element itu bersifat apa */
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
