// Event Handling
const closes = document.querySelectorAll('.close');
const card = document.querySelector('.card');

/* closes.addEventListener('click', function () {
  card.style.display = 'none';
}); */

// kapan kita butuh dom traversal?
//  DOM TRAVERSAL

// for (let i = 0; i < closes.length; i++) {
//   closes[i].addEventListener('click', function (e) {
//     /**
//      * * closes[i].parentElement.style.display = 'none';
//      * ? bisa juga dengan dikasih element e
//      */
//     console.log(e); // informasi berupa object, yang kita pilih sekarang ialah berupa target
//     e.target.parentElement.style.display = 'none';
//   });
// }

/**
 * !INGAT! querySelectorAll merupakan nodeList berupa array
 */

closes.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
  });
});

/**
 * ? diatas merupakan intro saja
 * * berikut adalah DOM Traversal Method
 */
