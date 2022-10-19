// example 1
let greet: (a: string, b: string) => void;

// nama parameter tidak harus sama dengan nama yang sudah kita signature di atas
greet = (name: string, div: string) => {
  console.log(`Hi ${name} you are ${div}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numbOne: number, numbTwo: number, action: string) => {
  // Semisal kita hanya kasih if aja tidak ada kondisi else maka ada kemungkinan returnnya bukan number
  if(action === "add") {
    return numbOne + numbTwo;
  } else {
    return numbOne - numbTwo;
  }
}

// example 3
let form: (obj: {name: string, age: number}) => void;

type person = {name: sring, age: number};

form = (ninja: person) => {
  console.log(`Hi ${ninja.name} he was ${ninja.age} years old`)
}
