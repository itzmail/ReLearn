/**
 * * callback adalah function yang dikirimkan sebagai parameter pada function lainnya
 */

// Synchronous Callback

function kalkulasi(a, b) {
  alert(`hasilnya ${a * b}`);
}

function inputNumber(inputan) {
  let a = prompt(`Angka pertama : `);
  let b = prompt(`Angka kedua : `);
  inputan(a, b);
}
// inputNumber(kalkulasi);

// Buat Synchronous dengan Jeda waktu
// Synchronous Callback

/* const santri = [
  {
    id: 1,
    nama: 'Ismail Nur Alam',
    no: 1001001,
    email: 'ismailnuralam@gmail.com',
  },
  {
    id: 1,
    nama: 'Zacky Hedrawanan',
    no: 1001002,
    email: 'zackking@gmail.com',
  },
  {
    id: 1,
    nama: 'Heru Tanuki',
    no: 1001003,
    email: 'herunaki@gmail.com',
  },
]; */

/* console.log('start'); 
santri.forEach((m) => {
  for (let i; i < 1000000; i++) {
    let date = new Date();
  }
  console.log(m.nama);
});
console.log('finish'); */

// Asynchronous Callback (use vanilla javascript version old)
function getDataMahasiswa(url, succses, error) {
  let xhr = new XMLHttpRequest();

  // onreadystatechange => suatu kondisi ketika state nya selesai berubah
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succses(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open('get', url);
  xhr.send();
}

console.log('Mulai');
getDataMahasiswa(
  'santri.json',
  (result) => {
    const loopSantri = JSON.parse(result);
    loopSantri.forEach((m) => console.log(m.nama));
  },
  (error) => console.log(error)
);
console.log('Selesai');

// result
// Mulai
// Selesai
// Baru namanya ....
