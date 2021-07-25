/* const daftarHadir = ['Agung', 'Daewi', 'Okky'];

let rincianHadir = daftarHadir.map((nama) => ({
  nama,
  jumlahKata: nama.length,
}));

console.table(rincianHadir); */

/**
 * *Konsep THIS pada Arrow Function
 */

// Constructor Function
/* let ohio = function () {
  this.nama = 'Ismail';
  this.umur = 20;
  this.sayHello = function () {
    console.log(`Hello ${this.nama}, umurmu ${this.umur}`);
  };
};

let Ismail = new ohio(); */

/**
 * * Di Arrow Function konsep this tidak berlaku
 */

/* let ohio = function () {
  this.nama = 'Ismail';
  this.umur = 20;
  this.sayHello = () => {
    console.log(`Hello ${this.nama}, umurmu ${this.umur}`); // this disini akan mencari di luar atau leksikal scope
    console.log(this);
  };
};

let Ismail = new ohio(); */

/**
 * !Konsep ini ngga Berfungsi pada object literal
 */

/* const iniObject = {
  nama: 'Ismail',
  umur: 20,
  sayHello: () => {
    console.log(`Hello ${this.nama}, umurmu ${this.umur}`)
    console.log(this); // this di sini akan mencari diluar scope atau window
  },
}; */

// Contoh Lainnya
const Lamantine = function () {
  this.nama = 'Ismail';
  this.umur = 20;
  this.sayHello = () => {
    console.log(`Hello ${this.nama}, umurmu ${this.umur}`); // this disini akan mencari di luar atau leksikal scope
    console.log(this);
  }; // ini merupakan function expresion

  /* setInterval(function () {
    console.log(this);
  }, 500);// ini merupakan function declaration, maka ketika program dijalankan function ini akan kena hoisting */

  /* setInterval(() => {
    console.log(this.umur++);
  }, 500); solusinya seperti ini*/
};

let Ismail = new Lamantine();

/**
 * * Summary
 * ? arrow function tidak memiliki konsep this
 * ? selain itu memiliki konsep arrow function
 */

// Contoh lain
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  } // agar berubah urutannya yang hilang duluan maksudnya

  this.classList.toggle('size');
  setTimeout(() => {
    this.classList.toggle('caption');
  }, 900);
});
