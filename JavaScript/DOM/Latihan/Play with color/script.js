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