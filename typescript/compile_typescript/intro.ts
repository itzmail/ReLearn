/**
 * Dilihat dari bahasa sendiri bahwa type scriopt sendiri merupakana bahasa program turunan dari Javascript yang dimana kita menuliskan syntaxnya dengan mencantumkan Tipe Data
 */

let character = "Ismail";

// character = 1 akan terjadi error karena di awal kita sudah mendefiiniskan tipe data string jadi tidak bisa diubah

const dinamicsNum = (data : number) => {
    const calculate = data * Math.PI;
    console.log(calculate);
}

dinamicsNum(10);
