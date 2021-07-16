function getPilihanComputer() {
    const comp = Math.random(); 
     
    if(comp < 0.36) return 'semut';
    if(comp >= 0.36 && comp <=0.66) return 'orang';
    return 'gajah'
}

function getHasil(player, comp) {
    if(player == comp) return 'SERI!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!'
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    if(player == 'gajah') return (comp == 'semut') ? 'KALAH!' : 'MENANG!'
    return 'salah'
}

const rolling = () => {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`);
        if(i == gambar.length) i = 0;
    }, 100)
}

const option = document.querySelectorAll('li img');
option.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanPlayer, pilihanComputer)

        rolling()

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', `img/${pilihanComputer}.png`)
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil
        },1000)

    })
})