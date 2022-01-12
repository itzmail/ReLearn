<?php
/*
* Khusus untuk tipe data object, kita tidak perlu melakukan konversi secara eksplisit, berbeda dengan tipe data string dan integer
* Namun agar aman, sebelum melakukan cast atau konversi, pastikan kita melakukan type check (pengecekan tipe data), dengan menggunakan kata kunci instanceof
* Hasil operator instanceof adalah boolean, true jika tipe data sesuai, false jika tidak sesuai */

class Programmer {
  var ?string $name;

  function __construct(?string $name){
    $this->name = $name;
  }
};

class FrontendProgrammer extends Programmer {};
class BackendProgrammer extends Programmer {};

function sayHelloProgrammer(Programmer $programmer) {
  if($programmer instanceof BackendProgrammer) { // jika var programmer tipedatanya BackendProgrammer maka jalankan code dibawah ini
    echo "Hello BackendProgrammer, my name $programmer->name" . PHP_EOL;
  } else if($programmer instanceof FrontendProgrammer) {
    echo "Hello FrontendProgrammer, my name $programmer->name" . PHP_EOL;
  } else{
    echo "Hello Programmer, my name $programmer->name" . PHP_EOL;
  }
}

sayHelloProgrammer(new FrontendProgrammer("Alam"));
