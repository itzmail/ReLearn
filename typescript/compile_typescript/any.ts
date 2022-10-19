// Jadi jika kita mendeklarasaikan variabela sebagai any, maka itu tandanya variable tersebut bisa diiisi sebagai tipe data apapun dan sifatnya dynamics

let question: any;
question = 1;
question = "Apa yang membawakan TS ini menarik?";
question = { no: 1, text: "Apa yang membawakan TS ini menarik?" }

// Array
let products: any[];
// products = "";
// products = {OK: 'Mantap'}
// Contoh seperti diatas tidak bisa seperti itu karena kita mendeklarasikan products seabagai array
products = ["ok", 1, true];

// Object
// Untuk Object kita bisa mendeklarasikan any pada tiap propertinya 
// Yang Perlu diingat adalah ketika kita mendeklarasikan object ketika kita menggunakan object tersebut semua properti harus terisi semua
let contacts: { name : any, no: number };
contacts = {name: "Ismail", no: 123};