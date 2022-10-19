// Closure
/**
 * * Closure adalah sebuah function yang memiliki akses terhadap parent scope
 * * Closure berguna untuk:
 * ? membuat function factories
 * ? membuat private method
let nama = 'Ismail';
function init() {
  return function tampilNama(nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama('ismail');
panggilNama('alam');
*/

// function factory
// kita buat function yang dimana terdapat function again di dalam function sebenarnya
function ucapkanSalam(waktu) {
  return function (nama) {
    return `Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`;
  };
}

// ucapkanSalam('Malam')('ada'); // Begitu bisa tetapi tidak dicontohkan
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

/* console.log(selamatMalam('Ismail')); */

// private methode atau private variable
// Kita buat variable dimana isinya function

// const add = () => {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// Immedietly invoke method
const add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// let a = add();

console.log(add());
console.log(add());
console.log(add());
