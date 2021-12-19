<?php
$a = 10;
$a++; // kembalikan $a lalu naikan 1 angka
++$a; // Naikan $a satu angka, lalu kembalikan $a

// JADI
$b = $a++; // outputnya jadi 12 bukan 13

var_dump($a);
var_dump($b);

// begitu sebaliknya untuk minus