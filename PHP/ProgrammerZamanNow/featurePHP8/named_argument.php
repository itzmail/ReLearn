<?php
/*
* Biasanya kita memanggil function, maka kita harus memasukkan argument atau parameter sesuai denga posisinya
* Dengan kemampuan named argument, kita bisa memasukkan argument atau parameter tanpa harus mengikuti posisinyaNamun penggunaan named argument harus disebutkan nama argument atau parameter nya
* Named argument juga menjadikan kode program mudah divaca ketika memanggil function yang memiliki argument yang sangat banyak*/

function sayHello(string $first, string $middle = "", string $last){
  echo "Hello $first $middle $last" . PHP_EOL;
}

// sayHello("Ismail", "Nur", "Alam"); // tanpa argument => posisi argument harus disesuaikan dengan posisi parameternya
// sayHello(middle: "Nur", first: "Alam", last: "Ismail");
sayHello(first: "Ismail", last: "Alam"); // middle harus dikasih default value
