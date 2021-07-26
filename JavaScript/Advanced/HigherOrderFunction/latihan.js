// Algoritma
// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let modVideos = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT Lanjutan'))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah menit menjadi detik
  .map((waktu) => {
    const pisah = waktu.split(':').map((part) => parseFloat(part));
    return pisah[0] * 60 + pisah[1];
  })

  // jumlah semua detik
  .reduce((total, detik) => total + detik, 0);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(modVideos / 3600);
modVideos = modVideos - jam * 3600; // sisa detik untuk menghitung

const menit = Math.floor(modVideos / 60);
const detik = modVideos - menit * 60;

// simpan di DOM
const duration = document.querySelector('.total-durasi');
duration.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jVideo = document.querySelector('.jumlah-video');
const jumlahVIdeo = videos.filter((video) =>
  video.textContent.includes('JAVASCRIPT Lanjutan')
).length;
jVideo.textContent = `${jumlahVIdeo} video`;

console.log(detik);
