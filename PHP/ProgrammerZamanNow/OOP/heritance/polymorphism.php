<?php

/*
* Polymorphism artinya dalam bahasa Yunani Banyak bentuk
* Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain terhadap bisa juga dengan class turunannya
* Polymorphism erat hubungannya dengan Inheritance */

class Programmer {
  var ?string $name;

  function __construct(?string $name){
    $this->name = $name;
  }
};

class FrontendProgrammer extends Programmer {};
class BackendProgrammer extends Programmer {};

class Company {
  // tipe data nya Programmer. diambil dari class Programmer
  public Programmer $programmer;
};


// Function Polymorphism
function sayHelloProgrammer(Programmer $programmer) {
  echo "Hi $programmer->name" . PHP_EOL;
}

$company = new Company();
$company->programmer = new Programmer("Ismail"); // property programmer harus di set terlebih dahulu
// var_dump($company->programmer);

// inilah yang dinamakan Polymorphism ngga hanya berubah terhadap class parent tetapi juga terhadap turunannya
$company->programmer = new FrontendProgrammer('Nur');
// var_dump($company->programmer);

$company->programmer = new BackendProgrammer('Alam');
// var_dump($company->programmer);

// Function Polymorphism
sayHelloProgrammer(new Programmer("Ismail"));
sayHelloProgrammer(new FrontendProgrammer("Nur"));
sayHelloProgrammer(new BackendProgrammer("Alam"));
