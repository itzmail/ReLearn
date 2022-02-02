/**
 * ? Error Handling
 * TODO Promise
 * * .then() dan .catch()
 *
 * TODO Async Await
 * * try {} dan catch() {}
 *
 * ? Cara menggunakan fetch()
 */

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector(`.input-keyword`);
    const movies = await getMovie(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovie(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=4c1ce192&s=' + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === 'False') {
        if (response.Error === 'Incorrect IMDb ID.') {
          throw new Error('Form mu kosong');
        }
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = '';
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

/**
 * Ketika Tombol diklik
 * ! tetapi bila mengikuti contoh yang diatas maka const tersebut sudah dihoisting
 * TODO maka dari itu menggunakan cara "event binding" => kita ngasih event ketika event tersebut belum ada
 */
document.addEventListener('click', async function (e) {
  // console.log(e);
  //hanya sebagai cek bahwasanya ketika kita klik window maka akan muncul beberapa element sesuai yang kita klik. buktikan sendiri
  if (e.target.classList.contains(`modal-detail-button`)) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    } catch (err) {
      console.log(err);
    }
  }
});
function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=4c1ce192&i=' + imdbid)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not Found');
      }
      return response.json();
    })
    .then((m) => {
      if (m.imdbID == '') {
        throw new Error('Movie detail not found');
      }
      return m;
    });
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
   <div class="card">
       <img src="${m.Poster}" class="card-img-top">
       <div class="card-body">
         <h5 class="card-title">${m.Title}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
         <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
       </div>
     </div>
 </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
   <div class="row">
       <div class="col-md-3">
           <img src="${m.Poster}" alt="" class="img-fluid">
       </div>
       <div class="col-md">
         <ul class="list-group">
             <li class="list-group-item">
               <h4>${m.Title} (${m.Year})</h4>
             </li>
             <li class="list-group-item">
               <strong>Director :</strong> ${m.Director}
             </li>
             <li class="list-group-item">
               <strong>Actors :</strong> ${m.Actors}
             </li>
             <li class="list-group-item">
               <strong>Writers :</strong> ${m.Writer}
             </li>
             <li class="list-group-item">
               <strong>Plot :</strong> ${m.Plot}
             </li>
           </ul>
       </div>
   </div>
 </div>`;
}
