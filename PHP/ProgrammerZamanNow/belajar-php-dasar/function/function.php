<?php

function sayHello($firstName, $lastName = '') {
    echo "Hello $firstName $lastName" . PHP_EOL;
}

// sayHello('ismail', 'alam');
// sayHello('ismail');

/**
 * Type of Declaration
 * sama halnya dengan variable parameter pada sebuah function bersifat dinamis
 * di PHP juga ada fitur konversi otomatis sehingga bila kita masukkan tipe data integer maka akan di konversi ke tipe data yang diinginkan
 */

 function sum(int $first, int $last) {
     $total = $first + $last;
     echo "Total $first + $last = $total" . PHP_EOL;
 };

 sum('100', '100');
 sum(100, 100);
 sum(true, false);
 sum([], []);