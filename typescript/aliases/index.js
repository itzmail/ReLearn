/*
  * Tujuan dari pembuatan aliases ini adalah agar kita tidak telalu membuang waktu untuk mengetik type parameter dan lain sebagainya
*/
var IdCard = function (user) {
    console.log(user.name);
    console.log(user.uid);
};
var CardFake = function (ok) {
    console.log(ok);
};
IdCard({ name: "ISmail", uid: 1010 });
