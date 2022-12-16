<?php
/*
* Sebelumnya kita sering melakukan debug variable menggunakan function var_dump()
* Function var_dump() sebenarnya memanggil function __debugInfo()
* Jika kita ingin mengubah isi dari debug info, kita bisa membuat function __debugInfo()*/

class Santri {
  public int $id;
  public string $name;
  public int $grade;
  public string $group;

  public function __debugInfo(): array
  {
    return [
    "no" => $this->id,
    "name" => $this->name,
    "grade" => $this->grade,
    "group" => $this->group,
    "author" => "Ismail",
    "version" => '1.0.0'
    ];
  }
}

$santri = new Santri();
$santri->id = 12;
$santri->name = "Ismail";
$santri->grade = 8;
$santri->group = "Full Stack";


var_dump($santri);

// ketika dipanggil maka infonya bisa kita rekayasa
