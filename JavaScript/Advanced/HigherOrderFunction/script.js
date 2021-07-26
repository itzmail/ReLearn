// penjelasan singkat terkait HOF

/**
 * HOF adalah function yang memiliki function lagi di paramaternya (callback) atau me-return function lagi
 */

// Contoh HOF

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

/**
 * ? FILTER
 */

//cari angka <= 3

//pakai for
const newArrayInt = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newArrayInt.push(angka[i]);
  }
}

// console.log(newArrayInt);

//pakai filter
/* const newAngka = angka.filter(function (a) {
  return a >= 3;
}); */

/**
 * ! callback function bisa pakai arrow function
 */

const newAngka = angka.filter((a) => a >= 3);

/**
 * ? MAP
 */

const mapAngka = angka.map((a) => a * 2);
// console.log(angka);
// console.log(mapAngka);

/**
 * ? REDUCE
 * * ada dua parameter
 * * param 1 = accumulator, isinya hasil dari pengoperasian
 * * param 2 = currentValue, isinya element array sekarang yang dilooping
 */

const reduceAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  1 // diisi dengan nilai awal defaultnya 0
);

console.log(reduceAngka);

/**
 * ? METHOD CHAINING
 */

// cari angka > 5
// kalikan 3
// jumlahkan

const hasilChaining = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur, 0);
