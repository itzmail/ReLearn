<?php
/*
* varible ini pada umumnya seperti array dimana bisa membuat sebuah parameter yang menerima sebuah banyak value
* jadi variable ini akan diubah secara otomatis menjadi array jadi kita tidak perlu mengubah lagi tipe data tersebut
* variable-length pada umumnya hanya bisa dilakukan di argument posisi terakhir
* 
* Variable length ini ditandai dengan titik 3
*/

function sumAll(...$values) {
  $total = 0;
  foreach($values as $value) {
    $total += $value;
  }
  echo "Total " . implode(",", $values) . " = $total" . PHP_EOL;
}

$nilai = [12, 13, 14, 15, 16];

sumAll(1, 2, 3, 4, 5);
sumAll(...$nilai); // kasus kalau ternyata kita punya array maka yang harus dilakukan ialaha memeberi titik 3 agar di konver menjari int
