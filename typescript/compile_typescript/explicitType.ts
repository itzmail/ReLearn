/**
 * Membuat Variable undefined with types
 * Kita buat type variable bertujuan untuk digunakan ketika kedepannya variable ini dipakai tetapi kita sudah mendeklarasikan tipe data di variable tersebut

*/

// Explicit Type 
let tString: string;
let tInt: number;
let tBool: boolean;

tString = "Ismail";
tInt = 12;
tBool = false;

// Array
let arrString: string[] = []; // kita buat ini dan isi dari array tidak boleh selain tipe data string
    // Tetapi kita tidak bisa menambahkan tipe data seperti push. karena ketika kita menjalankan variable tersebut variable tersebut akan diinisialisasi undefined
// Union type array
let kindOfArr: (string|number|boolean)[]; // Jadi kita bisa mengisi arary ini dengan tipe data yang sudah di dekalarasikan