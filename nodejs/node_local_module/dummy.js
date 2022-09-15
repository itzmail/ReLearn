function sayHello(nama){
  console.log(`Nama ku ${nama}`)
}

const PI = 3.14;

const mahasiswa = {
  nama: "Ismail",
  umur: 21,
  jabatan: "Direktur Utama PT"
}

class Kelas {
  constructor() {
    console.log("Mantap Jiwa");
  }
}

// module.exports.sayHello = sayHello;
// module.exports.PI = PI;

module.exports = {
  sayHello,
  PI,
  mahasiswa,
  Kelas
}
