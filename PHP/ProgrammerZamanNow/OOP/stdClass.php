<?php
/*
* stdClass adalah class kosnog bawaan dari php
* stdClass biasanya difunakan ketika kita melakukan konversi dari tipe lain menjadi tipe object
* stdClass sangat bergunak ketika misal kita ingin melakukan konversi dari tipe data array ke object secara otomatis
* */

$array = [
  "first_name" => "Ismail",
  "middle_name" => "Nur",
  "last_name" => "Alam"
];


$object = (object) $array;

echo "Detail Nama
nama awal = $object->first_name
nama tengah = $object->middle_name
nama akhir = $object->last_name \n";

//mengubah menjadi array lagi
$arraylagi = (array) $object;
// var_dump($arraylagi);
