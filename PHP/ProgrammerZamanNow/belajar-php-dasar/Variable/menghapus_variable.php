<?php
/*
 * Menghapus Variable menggunakan function unset($nama_var)
 * Setelah menghapus variable, kita tidak bisa mengakses variable tersebut
 * */

$name = "eko";
unset($name);

//echo $name; //outputnya muncul error

/*agar lebih aman gunakan method isset($var) untuk mengecek apakah sebuah variable ada dan nilainya tidak null*/
$umur = null;
isset($umur);

var_dump(isset($umur));

$nama = "kurniawan";
echo $nama;
