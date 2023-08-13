let myName: String = "Ismail";
let myFavNumber: Number = 73;

// inisialisasi var kosong
let pacarSaya: number | string;

// kasih value
pacarSaya = "Belum ada"

/**
 * * Tupple Array ini digunakan di bawah ini jadi harus diinisiasi sesuai elemannya
 */
let boxEdu: [String, String];
boxEdu = ["Math", "Physics"];

// Array biasa
let boxWish: String[];
boxWish = ['Sholehah Wife with my ideal standard']

let boxRandom: any[];

// console.log({ myName });
// console.log({ myFavNumber });
// console.log({ pacarSaya })

// ? Type Custom (Buat Object)

type Teman = {
    name: String;
    isKampret: boolean;
    hutang?: number;
}

let temanKita: Teman;

temanKita = {
    name: "Orang Lain",
    isKampret: true,
}

// console.log({temanKita});

//! Function

function onCreate(): boolean {
    return true;
}

const onResult = (): String => "Mantap Jiwa Bos";

// console.log(`ON Create ${onCreate()} and ON Made ${onResult()}`)

function addCalculate(x: number, y: number): number {
    return x + y;
}

// console.log(`Add Calculate ${addCalculate(10, 13)}`)

//? Interface

/**
 * * Antarmuka digunakan untuk mendefinisikan bentuk data seperti objek, 
 * * sedangkan tipe digunakan untuk mendefinisikan jenis tipe data. Tipe dapat memperkenalkan nama untuk semua jenis tipe data, termasuk tipe primitif, gabungan, dan persimpangan
 */

interface IProcessor {
    brand: String; 
    baseModel: String;
    modelName?: String;
    clockSpeed: number;
}

function onCreateProcessor(procesor: IProcessor): void {
    console.log(`
        --------------
        Terima Kasih ${procesor.brand}
        --------------

        Model : ${procesor.baseModel}
        Model Name : ${procesor.modelName || "KOSONG"}
        Clock Speed : ${procesor.clockSpeed} GHz
    `)
}

const coreI5: IProcessor = {
    brand: "Intel Core i5",
    baseModel: "core i5",
    clockSpeed: 4
}

onCreateProcessor(coreI5);