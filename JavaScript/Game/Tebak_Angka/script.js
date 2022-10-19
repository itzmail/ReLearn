let randomNumber = Math.floor(Math.random() * 100) + 1;

const tebakan = document.querySelector('.tebakan');
const hasilTerakhir = document.querySelector('.hasilTerakhir');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;