const tUbahWarna = document.getElementById('tUbahWarna');
const body = document.getElementsByTagName('body')[0]; // sama saja dengan document.body

// ketika diklik maka warna akan berubah menggunakan class
tUbahWarna.onclick = function() {
//    body.style.backgroundColor = 'red';
//    document.body.setAttribute('class', 'biru-muda');
   document.body.classList.toggle('biru-muda');
}

// ketika diklik maka warna akan muncul secara random
const tRandomColor = document.createElement('button');
const teksButton = document.createTextNode('Acak Warna');

tRandomColor.appendChild(teksButton);
tRandomColor.setAttribute('type', 'button');

tUbahWarna.after(tRandomColor);

tRandomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

//Mengatur kadar warna menggunakan input type range
const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('input', function() {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;

    body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`
})

const sHijau = document.querySelector('input[name=sHijau]');

sHijau.addEventListener('input', function() {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;

    body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`
})

const sBiru = document.querySelector('input[name=sBiru]');

sBiru.addEventListener('input', function() {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;

    body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`
})

//Dynamic mouse pointer change color
document.body.addEventListener('mousemove', function(event) {
    /* Posisi mouse */
    // console.log(event.clientX);
    /* Ukuran Browser */
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    body.style.backgroundColor = 'rgb('+xPos+','+yPos+', 100)'
})