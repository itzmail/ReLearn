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

var_dump(factorialLoop(6));
