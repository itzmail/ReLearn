<?php
/*
* Sebelumnya kita melakukan iterasi data di properties secara otomatis menggunakan foreach 
* Jika kita ingin mengangani hal ini secara manual. kita bisa menggunakan Iterator
* Iterator adalah interface yang digunakan untuk melakukan iterasi, namun membuat Iterator secara manual lumayan cukup ribet,
* oleh karena itu sekarang kita akan gunakan ArrayIterator, yaitu iterator yang menggunakan array sebagai data iterasi nya
* Dan agar class kita bisa di iterasi secara manual, kita bisa menggunakan interface Iterator Aggregate, disana kita hanya butuh meng-override function getIterator() yang mengembalikan data Iterator
* Ketika kita memanggil foreach maka yang akan terpanggil adalah function getIterator()*/

class Data implements IteratorAggregate {
  var string $first = "First";
  public string $second = "Second";
  protected string $third = "Third";
  private string $forth = "Forth";

  public function getIterator() 
  {
    $array = [
      "first" => $this->first,
      "second" => $this->second,
      "third" => $this->third,
      "forth" => $this->forth,
    ];

    return new ArrayIterator($array); // ArrayITerator adalah function bawaan dari PHP
  }
}

$data = new Data();

// sehingga ketika kita mengakses iterator object dari class Data yang terpanggil adalah function getItetor karena kita berhasil mengimplementasi IteratorAggregate 
foreach ($data as $key => $value) {
  echo "$key : $value \n";
}
