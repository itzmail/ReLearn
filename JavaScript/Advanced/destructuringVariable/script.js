// Kegunaan Destructuring array
// swab items
let ada = 1;
let bada = 2;

[ada, bada] = [bada, ada]

console.log(ada)
console.log(bada)

// return value pada function
function returnFunction () {
    return [1, 2]
}

const [a, b] = returnFunction();
console.log(a)

// rest paramteter

const [x, ...values] = [12, 13, 15, 16, 17]
console.log(x) // expected value 12
console.log(values[1]) // expected value 15

// Kegunaan Destructuring Object
const santri = {
    nama: "Ismail Nur Alam",
    email: "ismailnuralam@gmail.com"
}

const {nama, email} = santri // harus sama dengan nama properti
console.log(nama) // expected value Ismail Nur Alam

// assignment tanpa menggunakan variable
const {nama, email} = {
    nama: 'Ismail Nur Alam',
    email: 'ismailnuralam@gmail.com'
}

console.log(nama) // expected value Ismail Nur Alam

// assignment ke variable baru
const {nama: n, email: e} = {
    nama: 'Ismail Nur Alam',
    email: 'ismailnuralam@gmail.com'
} 

console.log(n) // expected value Ismail Nur Alam

// memberikan default value
const makanan = {
    adi: 'lontong',
    agus: 'nasi goreng'
}

const {adi: s, agus: d, lainya: l = "burger"} = makanan;
console.log(l) // expected value burger

// Rest Param
const minuman = {
    adi: 'BearBrand',
    agus: 'Yakult',
    telo: 'adi',
    uyu: 'jagung'
}

const {adi: w, ...lainnya} = minuman
console.log(lainnya.agus) // expected value Yakult

// mengambil field object, setelah dikirim sebagai parameter pada function
const MHS = {
    id: 123123123,
    nama: 'Ismail Nur Alam',
    email: 'ismailnuralam@gmail.com',
    noMHS: 123123123
}

function dataMHS({ id }) { // jangan lupa diberi kurung kurawal
    return id;
}

console.log(dataMHS(MHS)) // expected value 123123123