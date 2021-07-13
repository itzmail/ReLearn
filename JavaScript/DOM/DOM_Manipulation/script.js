// DOM Manipulation
// innerHTML

const judul = document.getElementById('judul');
judul.innerHTML = '<em>Ismail Nur Alam</em>';

const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

/* 
setAtribute('nama atribute', 'isi atribute') menambahkan atribute atau props pada tag html
getAtribute('nama atribute') -> mengambil atribute
removeAtribute('nama atribute') -> menghapus atribute
*/
const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'ismail');

//classList mengele attribute class
const p2 = document.querySelector('.p2');

p2.classList();
