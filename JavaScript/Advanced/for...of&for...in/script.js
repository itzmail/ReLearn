/**
 * ? for...of
 * * membuat sebuah looping atau menelusri object yang iterable atau yang dapat berubah-ubah
 * ? Apa saja iterable object?
 */

// 1. array
const gameNow = ['Genshin', 'Fortnie', 'AmongUs'];

// method usual
// gameNow.forEach((a) => console.log(a));

// method forEach with index
gameNow.forEach((nameGame, i) => {
  console.log(`Nama Game ${nameGame} di urutan ke-${i + 1}`);
});

// method for...of
// usually
/* for (const initialForLoop of gameNow) {
  console.log(initialForLoop);
} */

// with index 'Destructuring'
for (const [index, gameName] of gameNow.entries()) {
  // entries me-Return nilai array baru berupa ['key', 'index']
  console.log(`Nama Game ${gameName} di urutan ke-${index + 1}`);
}

// 2. strings

const gue = 'Ismail';

/* for (const namaGue of gue) {
  console.log(namaGue); // akan me return berupa setiap kata di variable gue
} */

// Sekedar latihan saja (cara mengubah object ke array)
/* const coba = {
  nama: 'Ismail',
  no: 1123,
  suka: 'Kamu',
};

let changeArr = Object.entries(coba);
let objectFromArray = Object.fromEntries(changeArr);
console.log(objectFromArray); */

// 3. NodeList
const liNama = document.querySelectorAll('.nama');

// method forEach
/* liNama.forEach((nama) => console.log(nama)); */

// method for ... on
for (const nama of liNama) {
  console.log(nama.innerHTML);
}

// arguments
function jumlahkanAngka() {
  // console.log(arguments);
  /**
   * ! karena ketika kita panggil tampa diisi parameter pada function maka yang disimpan di arguments bukan berupa array.
   * ! jadi tidak bisa menggunakan forEach dan reduce
   * * solusinya pakai for ... of
   */
  let hasil = 0;
  for (angka of arguments) {
    hasil += angka;
  }
  return console.log(hasil);
}

jumlahkanAngka(1, 2, 3, 4, 5); // bila tidak ada parameter di function tersebut maka argument yang kita panggil disimpan di argument. coba saja console.log(arguments)

/**
 * * FOR .... IN
 * * berguna untuk looping OBJECT dan yang dilooping hanya berupa enumerable(property)
 */

const santri = {
  nama: 'Ismail',
  umur: 20,
  email: 'ismailnuralam@gmail.com',
};

for (dataDiri in santri) {
  console.log(dataDiri); // expected value (yang muncul property saja)
  console.log(santri[dataDiri]); // expected value (yang muncul valuenya saja)
}
