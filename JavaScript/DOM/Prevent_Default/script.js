// Event Handling
const closes = document.querySelectorAll('.close');

closes.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault(); // berguna untuk mencegah aksi default dari komputer dan menggunakan method dari kita sendiri
  });
});
