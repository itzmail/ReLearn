<?php
/*
* Sebelumnhya kita tahu bahwa untuk membuat object yang bisa di iterasi, kita menggunakan ITerator
* Namun pembuatan Iterator secara manual sangatlah ribet
* Untungnya di PHP, terdapat fitur generator, yang bisa kita gunakan untuk membuat Iteraotr secara otomatis hanya dengan menggunakan kata kunci yield*/

function getGanjil(int $max): Iterator {
  for($i = 0; $i<=$max; $i++) {
    if($i % 2 != 0) {
      yield $i;
    }
  }
}

// foreach(getGanjil(100) as $value) {
//   echo "Ganjil : $value" . PHP_EOL;
// }

class Data implements IteratorAggregate {
  var string $first = "First";
  public string $second = "Second";
  protected string $third = "Third";
  private string $forth = "Forth";

  public function getIterator() 
  {
     yield "first" => $this->first;
     yield "second" => $this->second;
     yield "third" => $this->third;
     yield "forth" => $this->forth;
  }
}

$data = new Data();

var_dump($data->getIterator());
// sehingga ketika kita mengakses iterator object dari class Data yang terpanggil adalah function getItetor karena kita berhasil mengimplementasi IteratorAggregate 
foreach ($data as $key => $value) {
  echo "$key : $value \n";
}
