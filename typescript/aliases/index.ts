/*
  * Tujuan dari pembuatan aliases ini adalah agar kita tidak telalu membuang waktu untuk mengetik type parameter dan lain sebagainya
*/

type StringOrNum = String | Number
type ObjectWithUni = {name: String, uid: StringOrNum}

let IdCard = (user : ObjectWithUni) => {
  console.log(user.name);
  console.log(user.uid);
}

let CardFake = (ok: StringOrNum) => {
  console.log(ok);
}