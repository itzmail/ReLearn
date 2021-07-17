const container = document.querySelector('.container');
const show = document.querySelector('.show');
const thumbs = document.querySelectorAll('thumb');

container.addEventListener('click', function (e) {
  // cek apakah yang di-klik adalah thumb
  if (e.target.className == 'thumb') {
    show.src = e.target.src;
    show.classList.add('fade');
    setTimeout(function () {
      show.classList.remove('fade');
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains == 'active') {
      //     thumb.classList.remove('active');
      //   }
      thumb.className = 'thumb';
    });
    e.target.classList.add('active');
  }
});
