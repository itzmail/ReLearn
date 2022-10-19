/*
  * Function Basic
*/
// Deklarasi function
var greet;
greet = function () {
    console.log('Halo this world');
};
// Parameter Optional dan Default Value
// jadi bila kita tidak menambahkan argument pada parameter tersebut tidak terjadi error
var math = function (a, b, c, d) {
    if (d === void 0) { d = "Mantap"; }
    console.log(a + b);
    console.log(c); // parameter c menunjukan bahwa c adalah optional dan nila default dari optional adalah undefined
    console.log(d); // d merulpakan parameter yang memliki default mantap,
};
// Function spesifik return type
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
result;
