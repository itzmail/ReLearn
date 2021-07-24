// Prolog
// Mengingat materi sebelumnya

/**
 * ! Versi Prototype InHeritance
 */
const methodMahasiswa = {
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

// Constructor Function
/**
 * * Menggunakan keyword New
 * ? gunanya untuk apa?
 * * gunanya untuk mengembalikan nilai function declaration
 */

function Mahasiswa(nama, energi) {
  // let this = Object.create(methodMahasiswa.prototype);
  this.nama = nama;
  this.energi = energi;

  // return this;
  // yang dikomen ialah coding di belakang layar ketika kita menggunakan constructur function. sehingga cunstructure fungction sudah punya parent yaitu prototype
}

// Jadi kalau kita mau bikin method baru
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selemat makan!. Kamu makan ${porsi} porsi`;
};
// otomatis codingan yang diatas tertempel di function mahasiswa
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Hi ${this.nama}, kamu sudah bermain selama ${jam} jam`;
};

let ismail = new Mahasiswa('ismail', 98);

/**
 * ! Versi Class
 * * Versi ini memiliki konsep yang sama dengan bahasa Java dan bahasa lainnya yang object Oriented
 */

class Murid {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, kamu makan ${porsi}`;
  }

  main(jam) {
    this.energi -= jam;
    return `Hi ${this.nama}, kamu sudah bermain selama ${jam} jam`;
  }
}

let alam = new Murid('Alam', 98);

/**
 * * Kesimpulannya Prototype adalah jabaran method-method bawaan dari bahasa program khususnya javascript. untuk mengetahui method apa saja yang bisa digunakan oleh object atau array bisa lihat lewat _proto_ tersebut
 */
