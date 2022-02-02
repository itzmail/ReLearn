<?php
class Person {
  const AUTHOR = "itzmail";
  var string $name = "Paijo";
  var ?string $addres;
  var string $country;

  function sayHello(?string $name){
    if(is_null($name)){
      echo "Hi, my name is {$this->name}" . PHP_EOL; // akan mengakses variable name yang ada di properties var $name
    } else {
      echo "Hello $name, my name is $this->name" . PHP_EOL;
    }
  }

  function info(){
    echo "AUTHOR : " . self::AUTHOR . PHP_EOL; // keyword self untuk mengakses constanta di dalam class yang sama
  }

  function __construct() { // yang akan dieksekusi pertama, jika kita memberikan paramteter pada function ini, ketika kita eksekusi harus diberikan parameter juga
    echo "Function Construtor runned" . PHP_EOL;
  }

  function __destruct() { // akan berjalan setelah semua codingan berjalan
    echo "Object person $this->name is destroyed" . PHP_EOL;
  }
}

$person = new Person();
$person->info();

$person->sayHello("Ismail");

// mengakses constant 
echo "Author dari class : ". Person::AUTHOR . PHP_EOL;
