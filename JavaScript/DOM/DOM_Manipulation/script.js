// DOM Manipulation

//Manipulasi Element

// innerHTML

const judul = document.getElementById('judul');
judul.innerHTML = '<em>Ismail Nur Alam</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

/* 
setAtribute('nama atribute', 'isi atribute') menambahkan atribute atau props pada tag html
getAtribute('nama atribute') -> mengambil atribute
removeAtribute('nama atribute') -> menghapus atribute
*/
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'ismail');

//classList mengele attribute class
const p2 = document.querySelector('.p2');

// p2.classList();

//Manipulasi Node
const pBaru = document.createElement('p');

//simpan tulisan ke dalam paragraf
const teksPBaru = document.createTextNode('Paragraf Baru');
//simpan pBaru di akhir Section A
pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

/**
 * *Urutan dalam Membuat Element tanpa harus mengedit HTML
 * ? buat dulu vas bunga contoh diatas const pBaru
 * ? buat bunganya contoh diatas const teksBaru
 * ? kedua variable digabung menggunakan appendChild
 * ? tampilkan di section A
 */

/**
 * TODO latihan
 * ? Bagaimana caranya menysipkan li baru diantara item 1 dan 2
 * * clue : menggunakan method insertBefore('node baru', node lama)
 */

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// REMOVE and REPLACE child
// parentNode.removeChild();
// parentNode.replaceChild(node baru, node lama);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

/**
 * * element yang diubah
 */

pBaru.style.backgroundColor = 'lightGreen';
liBaru.style.backgroundColor = 'lightGreen';
h2Baru.style.backgroundColor = 'lightGreen';
