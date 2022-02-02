let tanya = true;
while (tanya) {
// mengangkap pilihan player
let player = prompt('pilih: gajah, semut, orang');
// menangkap pilihan computer
let pc = '';
// membangkitkan bilangan random
let comp = Math.random(); 

if(comp < 0.36) {
    pc = 'semut';
} else if(comp >= 0.36 && comp <=0.66) {
    pc = 'orang';
} else if (comp > 0.66){
    pc = 'gajah'
} else {
    pc = 'belum memilih';
}
// menentukan rules

let hasil = '';
if(player == pc) {
    hasil = 'SERI!';
} else if (player == 'semut') {
    hasil = (comp == 'orang') ? 'Anda Kalah' : 'Computer Menang'
} else if(player == 'orang') {
    hasil = (comp == 'gajah') ? 'Computer Menang' : 'Anda Menang'
} else if(player == 'gajah') {
    hasil = (comp == 'semut') ? 'Computer Menang' : 'Anda Menang'
} else {
    hasil = 'tidak ada yang menang'
}

// tampilkan hasilnya
result = alert(
    `Player memilih : ${player} \nComputer memilih : ${pc}
    ${hasil}`
);

let tanya = confirm('lagi?')
}

alert('Terima kasih sudah bermain!')