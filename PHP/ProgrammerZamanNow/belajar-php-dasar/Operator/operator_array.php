<?php
/* Union => penggabungan array */
$first = [
    "first_name" => "Ismail"
];

$last = [
    "first_name" => "Nur", // yang memiliki key sama, maka akan di ignore
    "last_name" => "Alam"
];

$full_name = $last + $first;
// var_dump($full_name);

/* Pembandingan Array */
$a = [
    "first_name" => "Ismail",
    "las_name" => "Alam"
];

$b = [
    "las_name" => "Alam",
    "first_name" => "Ismail"
];

// Equality
// true jika $a dan $b memiliki key-value sama
var_dump($a == $b); // Output bool(true)

// Identity
// true jika $a dan $b memiliki key-value sama dan posisi sama
var_dump($a === $b); // Output bool(false)

// Inequality
// true jika $a dan $b tidak sama
var_dump($a != $b); // Output bool(false)

// Nonidentity
// true jika $a dan $b tidak identik
var_dump($a !== $b); // Output bool(true)
