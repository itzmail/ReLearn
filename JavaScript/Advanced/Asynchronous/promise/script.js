/**
 * * Promise
 * Promise adalah object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asyncchronous di masa yang akan datang
 * dua kondisi janji (terpenuhi dan diinkari)
 * states (fullfilled / rejected / pending)
 * untuk menjalankan states ada 3 callback (resolve / rejected / pending)
 * aksi atau response dari callback (then (resolve) / catch (reject))
 */

// Conotoh 1 (sederhana)
let ditepati = true;

const janji1 = new Promise((resolve, rejected) => {
  if (ditepati) {
    resolve('Janji ditepati');
  } else {
    rejected('Janji tidak ditipati');
  }
});

janji1
  .then((response) => console.log(`OK! : ${response}`)) // nangkap responses resolve
  .catch((response) => console.log(`NOT OK! : ${response}`)); // nangkap responses rejected

// ingat resolve dan rejected termasuk dalam callback

// Contoh 2
let toDo = true;

let janji2 = new Promise((resolve, reject) => {
  if (toDo) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('Tidak ditepati setelah beberapa waktu');
    }, 2000);
  }
});

console.log(`mulai`);
console.log(janji2.then(() => console.log(janji2))); // hanya sebagai gambaran ada proses pending selama 2 detik  di console.browser

// coding seharusnya
janji2
  .finally(() => console.log(`selesai menunggu`)) // jadi karena lagi pending status nya maka setelah pendingnya selesai method finally dijalankan dulu baru menjalankan then atau catch
  .then((response) => console.log(`OK : ${response}`))
  .catch((response) => console.log(`NOT OK : ${response}`));
console.log(`selesai`);

/**
 * * Promise All
 * digunakan ketika kita mau menjalankan dua promise sekaligus
 * Contoh in the below
 */

let justDoIt = true;

let janji3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Avenger',
        sutradara: 'Ismail Nur Alam',
        aktor: 'Deddy, Okky',
      },
    ]);
  });
});

let janji4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Rambutan',
        sutradra: 'Semangka',
        tahunRilis: 2012,
      },
    ]);
  });
});

console.log('mulai');
// cara manual
/* janji3.then(response => console.log(response))
janji4.then(response => console.log(response)) */

// cara efektif
Promise.all([
  janji3,
  janji4,
]) /* .then((response) => console.log(response));  bentuk ini masih berupa array*/
  .then((response) => {
    const [janji3, janji4] = response;
    console.log(janji3);
    console.log(janji4);
  });

console.log('akhir');
