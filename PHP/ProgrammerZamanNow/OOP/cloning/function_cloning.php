<?php
/*
* __clone() Function
* Kadang menyalin semua properties bukanlah yang kita inginkan
* Misal saja kita hanya ingin menyalin beberapa properties saja
* Jika kita ingin memodifikasi cara PHP melakukan clone, kita bisa membuat function di dalam class nya dengan nama function __clone()
* Function __clone() akan dipanggil di object hasil duplikasi setelah duplikasi selesai
* Jadi jika kita ingin menghapus beberapa properties, bisa kita lakukan di function __clone()*/

// $tuden1 => clone $tuden2 => $tudent2->__clone()

class Student {
  public string $name = 'Ismail';
  private int $age;
  var string $gender = 'Male';

  public function setAge(int $age): void {
    $this->age = $age;
  }

  public function __clone()
  {
    unset($this->age);
  }
}

$tudent = new Student();
$tudent->setAge(20);
var_dump($tudent);

$tuden2 = clone $tudent;
$tuden2->name="Lilis";
$tuden2->gender="Female";
var_dump($tuden2);
