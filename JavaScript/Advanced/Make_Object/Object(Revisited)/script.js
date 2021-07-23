// 1. Object Literal
let mahasiswa = {
  nama: 'Ismail Nur Alam',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat datang ${this.nama}, Kamu makan ${energi} porsi`);
  },
};

// 2. Function Declaration
let namaMurid = 'tidak bernama';
let energiMurid = 'dasar lemah';

// function pendidikan(nama, energi) {
//   let murid = {};
//   murid.nama = nama;
//   murid.energi = energi;

// kekurangannya ada di bawah ini karena ketika fungsi ini di panggil maka fungsi yang ke bawah juga ikut diduplikat padahal parameternya cuman ada dua. jadi tidak efektif

// murid.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Selamat datang ${this.nama}, Kamu makan ${energi} porsi`);
// };
//   return murid;
// }
/**
 * * solusinya ialah di bawah ini
 */

const methodMurid = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Selamat datang ${this.nama}, Kamu makan ${porsi} porsi`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Kamu main ${jam} jam`);
  },
  tidur: function (jam) {
    this.energi += jam;
    console.log(`Halo ${this.nama}, Kamu sudah tidur ${jam} jam`);
  },
};

function pendidikan(nama, energi) {
  let murid = Object.create(methodMurid); // perbedaan method ini dengan cara sebelumnya ialah kita bisa memberikan parameter di Object.create() yang mengacu pada element parentnya sehingga dapat membawa property dari object lainnya
  murid.nama = nama;
  murid.energi = energi;

  return murid;
}
let dataIsmail = pendidikan('Ismail', 98);
let dataDoddy = pendidikan('Doddy', 88);

/**
 * !CARA INI MASIH TIDAK EFECTIFE
 * * Karena bila ada object baru di variable method Murid maka kita harus ikut menambahkan method tersebut.
 * * Ada cara yan lebih efectife lagi yatitu menggunakan object.create()
 */

// 3. constructor function
/**
 * * Menggunakan keyword New
 * ? gunanya untuk apa?
 * * gunanya untuk mengembalikan nilai function declaration
 */

function Pendidikan(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Selamat datang ${this.nama}, Kamu makan ${energi} porsi`);
  };
}

var dataMurid = new Pendidikan('ismail', 98);
