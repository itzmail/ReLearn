<?php
/*
* Object Cloning
* Kadang kita ada kebutuhan untuk menduplikasi sebuah Object
* Biasanya untuk melakukan hal ini, kita bisa membuat object baru, lalu menyalin semua properties di object 
* awal ke object baru
* Untungnya PHP mendukung object Cloning
* Kita bisa menggunakan perintah clone untuk membuat duplikasi object
* Secara otomatis semua properties di object aswal akan di duplkasai*/

class Student {
  public string $name = 'Ismail';
  private int $age;
  var string $gender = 'Male';

  public function setAge(int $age): void {
    $this->age = $age;
  }
}

$tudent = new Student();
$tudent->setAge(20);
var_dump($tudent);

$tuden2 = clone $tudent;
$tuden2->name="Lilis";
$tuden2->gender="Female";
var_dump($tuden2);

