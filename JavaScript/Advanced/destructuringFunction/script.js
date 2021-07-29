function aljabar(a, b) {
  return [a + b, a * b];
}

// let penjumalahan = aljabar(2, 3)[0];
// let perkalian = aljabar(2, 3)[1];

// Dengan destructuring
// const [jumlah, kali] = aljabar(2, 3);
// console.log(jumlah) // expected value 5;
// console.log(kali) // expected value 6;

/**
 * ! Kekurangan menggunakan method ini adalah ketika kita melakukan destrcuturing urutan element array nya harus sama
 * * Solusinya adalah dengan cara me-return berupa object
 */

function kalkulasi(a, b) {
  return {
    jumlah: a + b,
    kali: a * b,
    kurang: a - b,
    bagi: a / b,
  };
}

const { kurang, bagi, jumlah, kali } = kalkulasi(2, 4);

// destructuring argument function
const dataSantri = {
  nama: 'Ismail Nur Alam',
  noUrut: '21',
  nilai: {
    tugas: 87,
    uts: 89,
    uas: 90,
  },
};

function cetakData({ nama, noUrut, nilai: { tugas, uts, uas } }) {
  return `Halo ${nama}, nomor urut kamu ${noUrut}, nilai UAS kamu ${uas}`;
}

console.log(cetakData(dataSantri));
