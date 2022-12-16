<?php
/*
* Recursive artinya dapat memanggil dirinya sendiri, jadi recursive function merupakan kemampuan function memanggil function dirinya sendiri
* contoh nyata ketika kitam memakai recursive function adalah saat kasus factorial*/

function factorialLoop(int $value) : int {
  $total = 1;
  $nilai = [];
  for ($i = 1; $i <= $value; $i++) {
    $nilai[] = $i; 
    $total *= $i;
  }
  return ($total);
}

var_dump(factorialLoop(4));

function factorialRecursive(int $value) : int {
  if($value == 1) {
    return 1;
  } else {
  return $value * factorialRecursive($value - 1); // function ini akan dipanggil lagi dan akan menjalankan codingan dari awal lagi (hampir seperti looping)
  }
}

var_dump(factorialRecursive(4));
 
/*
* Problem dengan Recursive
*
* jika recursive kita terlalu dalam maka akan ada kemungkinan terjadi memori overflow, yaitu error dimana memory terlalu banyak digunakan di php
* Kenapa problem ini bisa terjadi?
* Karena ketiak kita memanggil function lain, maka stack akan menumpuk terus dan jika terlalu banyak maka akan membutuhkan
* konsumsi memory besar, jika sudah melewati batas makan akan terjadi error memory
*
* jadi var_dump(factorialRecursive(4)) proses berjalannya itu seperti dibawah ini 
* factorialRecursive(4) * factorialRecursive(3) * factorialRecursive(2) * factorialRecursive(1)*/

// contoh error memory

function loop(int $value) {
  if($value == 0) {
    echo "Selesai" . PHP_EOL;
  } else {
    echo "Loop-$value" . PHP_EOL;
    loop($value - 1);
  }
}

/*loop(30000000)
*
* maka akan muncuk error : 
* PHP Fatal error:  Allowed memory size of 134217728 bytes exhausted (tried to allocate 2621
44 bytes) in /home/ismailify/Documents/education/ReLearn/PHP/ProgrammerZamanNow/belajar-ph
p-dasar/function/recursive_function.php on line 46 */
