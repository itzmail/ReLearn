"use strict";
let myName = "Ismail";
let myFavNumber = 73;
// inisialisasi var kosong
let pacarSaya;
// kasih value
pacarSaya = "Belum ada";
/**
 * * Tupple Array ini digunakan di bawah ini jadi harus diinisiasi sesuai elemannya
 */
let boxEdu;
boxEdu = ["Math", "Physics"];
// Array biasa
let boxWish;
boxWish = ['Sholehah Wife with my ideal standard'];
let boxRandom;
let temanKita;
temanKita = {
    name: "Orang Lain",
    isKampret: true,
};
// console.log({temanKita});
//! Function
function onCreate() {
    return true;
}
const onResult = () => "Mantap Jiwa Bos";
// console.log(`ON Create ${onCreate()} and ON Made ${onResult()}`)
function addCalculate(x, y) {
    return x + y;
}
function onCreateProcessor(procesor) {
    console.log(`
        --------------
        Terima Kasih ${procesor.brand}
        --------------

        Model : ${procesor.baseModel}
        Model Name : ${procesor.modelName || "KOSONG"}
        Clock Speed : ${procesor.clockSpeed} GHz
        Turbo Boost : ${procesor.turboBoost || false}
        Core : ${procesor.core}
    `);
}
const coreI5 = {
    brand: "Intel Core i5",
    baseModel: "core i5",
    clockSpeed: 4,
    core: 'DUAL CORE'
};
onCreateProcessor(coreI5);
