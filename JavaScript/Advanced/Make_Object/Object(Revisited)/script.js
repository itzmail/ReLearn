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

function pendidikan(nama, energi) {
  let murid = {};
  murid.nama = nama;
  murid.energi = energi;
  murid.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Selamat datang ${this.nama}, Kamu makan ${energi} porsi`);
  };
  return murid;
}

// let dataMurid = pendidikan(namaMurid, energiMurid);

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
