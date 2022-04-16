/**
 * Sebelum kita membahas codingan yang ada dibawah ini
 * Kata kunci yang perlu diingat adalah "Consisten with your type"
 */

/* Array */

let arrFirst = ["Ismail", "Nur", "Alam"];

arrFirst.push('Mantap'); // Ini masih bisa karena masih sama string didalam array
// arrFirst.push(2) ini akan error karena sudah beda jenis tipe data
// arrFirst[0]=2; ini juga error dengan alasan yang sama

/* Kita bisa memasukan array dengan beragam tipe data tetapi dengan syarat ktia sudah mendeklarasikan diawal */

let kindOfArr = [12, "Ismail", true];

kindOfArr.push(false);
kindOfArr[0] = "Nur";
kindOfArr[1] = 123;

/* Object */

let objFirst = {
    name: "Mario",
    male: false,
    age: 34
}

// Jika kita mau modifikasi variabel tersebut, Mulai dari struktur tiap property harus sama tipe datanya

objFirst.name = "Luigi";
objFirst.age = objFirst.age * 23;

// Bisa juga seperti ini
objFirst = {
    age: 213,
    name: 'Lugi',
    male: false,
} // seperti ini juga bisa