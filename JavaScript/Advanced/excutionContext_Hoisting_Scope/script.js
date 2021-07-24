// Execution Context, Hoisting, & Scope

/**
 * ? JavaScript Phase
 * * Creation Phase
 * TODO Ketika pertama kali program dijalankan maka komputer akan mencari keyword variable terlebih dahulu.
 * TODO Setelah ketemu dengan keyword tersebut, maka komputer akan mendefiniskan atau me-return value tersebut dengan (undefined)
 * nama var = undefined
 * dalam function = fn()
 * ! prosedure diatas dinamakan Hoisting(mengerek bendera)
 *
 * * Execution Phase
 * TODO seteleha cration phase dijalankan maka tinggal dieksekusi codingannya
 */

// contoh
/**  
* * Variable

var nama = 'Ismail';
console.log(nama); // yang muncul -> Ismail

console.log(Nama);
var Nama = 'Ismail'; // yang muncul -> undefined

* * Function
console.log(pesanMakanan()); // yang muncul -> nama makan dan minum undefined

var makanan = 'bakso';
var minuman = 'parfait coklat';


function pesanMakanan() {
  return `Pesanan mu ${makanan} dan ${minuman}`;
}

* ! Untuk melihat JS VIsualisasi bisa kunjungi http://www.pythontutor.com/javascript.html#mode=edit
*/
var username = '@ismailify';

function dataUser(a) {
  var link = 'https://instagram.com/';
  return link + a;
}

console.log(dataUser(username));
