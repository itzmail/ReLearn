// const user = 'Ismail';
// // Embeded Expressions
// // console.log(`Hasil dari 2 x 4 x 8 = ${2 * 4 * 8}`);
// // console.log(2 * 4 == 8 ? 'Genap' : 'Ganjil'); // bisa juga digunakan ternary
// // console.log(alert('halo'));

// // HTML Fragments
// const santri = [
//   {
//     nama: 'Ismail Nur Alam',
//     email: 'ismailnuralam@imaco.com',
//   },
//   {
//     nama: 'Chila on Seven',
//     email: 'Kucing Lucu',
//   },
//   {
//     nama: 'ManMan',
//     email: 'manjaro@manjaro.com',
//   },
// ];

// let el = `<h3>Data User Imaco</h3>
// <div class="dataUser">
//   ${santri
//     .map(
//       (a) => `<ul>
//     <li>nama: ${a.nama}</li>
//     <li>nama: ${a.email}</li>
//   </ul>`
//     )
//     .join('')}
// </div>`;

// // Review Materi DOM
// document.body.innerHTML = el;

// let fragHTML = document.querySelector('.dataUser');
// const message = document.createTextNode('Berikut daftar Lagu');
// const pBaru = document.createElement('p');
// pBaru.appendChild(message);

// fragHTML.appendChild(pBaru);

// const apiLagu = [
//   {
//     judul: 'Run Free',
//     author: 'deep chills',
//   },
//   {
//     judul: 'Take Away',
//     author: 'chainsmoker',
//     feat: 'Lennon Stella',
//   },
// ];

// let listLagu = `<div class="daftarLagu">
// <h2>Daftar Lagu Kesukaan</h2>
//   ${apiLagu
//     .map(
//       (lagu) => `<ul>
//     <li>judul: ${lagu.judul}</li>
//     <li>author: ${lagu.author}</li>
//     ${lagu.feat ? `<li>feat: ${lagu.feat}</li>` : ''}
//   </ul>`
//     )
//     .join('')}
// </div>`;

// const daftarLagu = (document.getElementById('daftarLagu').innerHTML = listLagu);

// Nested HTML
const kuliah = {
  nama: 'Ismail Nur Alam',
  semseter: 5,
  mataKuliah: [
    'Rekayasa IT',
    'Komunikasi Visual',
    'Analisis Data AI',
    'AI untuk keperluan sehari-hari',
  ],
};

function mataKuliah(matakuliah) {
  return `<ol>
    ${matakuliah.map((mk) => `<li>${mk}</li>`).join('')}
  </ol>`;
}

let mhsKkuliah = `<div class="classMHS">
  <ul>
    <li>nama: ${kuliah.nama}</li>
    <li>semester: ${kuliah.semseter}</li>
    <li>mata kuliah: ${mataKuliah(kuliah.mataKuliah)}</li>
  </ul>
</div>`;

document.body.innerHTML = mhsKkuliah;
