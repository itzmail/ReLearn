// const closes = document.querySelectorAll('.close');

// closes.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault(); // berguna untuk mencegah aksi default dari komputer dan menggunakan method dari kita sendiri
//     e.stopPropagation(); // gunanya untuk mencegah element child untuk menelusuri event parent (materi event bubling)
//   });
// });

// /**
//  * TODO Event Bubling
//  * * ilustrasinya seperti gelembung yang mengapung di air lama ke lamaan ke atas
//  * * maksudnya ialah event dari child akan menulsuri apakah terdapat event dari parenya atau tidak? bila ada maka event parent dijalankan dulu baru event child
//  */

// const cards = document.querySelectorAll('.card');

// cards.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     alert('ok');
//   });
// });

/**
 * ! Cara diatas tidak efisien karena Ketika kita menambahkan elemen baru di website maka elemen baru tersebut tidak memiliki fungsi yang kita buat
 * TODO caranya agar hal tersbut tidak terjadi kita simpan methodnya di parent terluar yaitu container
 */

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
