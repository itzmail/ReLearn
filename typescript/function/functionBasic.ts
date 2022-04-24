/*
  * Function Basic
*/

// Deklarasi function

let greet: Function;

greet = () => {
  console.log('Halo this world');
}

// Parameter Optional dan Default Value
// jadi bila kita tidak menambahkan argument pada parameter tersebut tidak terjadi error

let math = (a: number, b: number, c?, d: number | string = "Mantap") => {
  console.log(a + b)
  console.log(c) // parameter c menunjukan bahwa c adalah optional dan nila default dari optional adalah undefined
  console.log(d) // d merulpakan parameter yang memliki default mantap,
};
