<?php
/*
* Sama seperti tipe data yang lain, untuk membandingkan dua buah object,
* kita bisa menggunakan operator == (equals) dan === (identity)
* (==) membandingkan semua properties yang terdapat di object tersebut,
* dan tiap properties juga akan dibandingkan menggunakan operator == (equals)
* Sedangkan operator (===), maka akan membandingkan apakah object identik, 
* artinya mengacu ke object yang sama*/
class Student {
  public string $name;
  var int $age;
  var string $gender;

  public function setAge(int $age): void {
    $this->age = $age;
  }
}

$tudent1 = new Student();
$tudent1->name = "Ismail";
$tudent1->gender = "Man";

$tudent2 = new Student();
$tudent2->name = "Ismail";
$tudent2->gender = "Man";

var_dump($tudent1 == $tudent2);
var_dump($tudent1 === $tudent2);
