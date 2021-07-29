/**
 * * Rest Parameter = Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
 * * letaknya harus di akhir parameter
 */

// core
function myFunc(...myArgs) {
  return myArgs;
  //   return Array.from(arguments); // merubah dari object ke array
  //   return [...arguments]; // spread operator
}

/* console.log(myFunc(1, 2, 3, 4, 5)); */

// combine for ... of
function jumlah(...angka) {
  let total = 0;
  for (let a of angka) {
    total += a;
  }
  /* return total; */

  // use Reduce total
  return angka.reduce((acc, cur) => acc + cur);
}

/* console.log(jumlah(1, 2, 3)); */

// array destructuring
const kelompok1 = ['a', 'b', 'c', 'd'];
const [ketua, wakil, ...anggota] = kelompok1;
/* console.log(anggota); */

// objecrt destructuring
const team = {
  pm: 'Ismail',
  frontEnd1: 'Khrisna',
  backEnd: 'Hana',
};

const { pm, ...myTeam } = team;
console.log(pm);

//Study kasus
// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type); // typeof to check tipe data
}

console.log(filterBy('number', 1, 2, 'Ismail', 'Ibrahim', false, true, 11));
