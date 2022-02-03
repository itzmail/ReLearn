<?php
/*
* Kata kunci Static adalah keyword yang bisa kita gunakan untuk membuat properties atau function di class bisa diakses secara langsung tanpa menginstansiasi class terlebih dahulu
* Namun ingat, saat kita buat static properties atau function, secara otomatis itu tidak akan berhubungan lagi dengan class instance yang kita buat
* Untuk cara mengakses static properties dan function sama seperti mengakses constant, kita bisa menggunakan operaotr::
* static function tidak bisa mengakses function biasa , karena function biasa menempel pada class instance sedangkan static function tidak*/

class MathHelper
{
  static public string $name = "MathHelper";
}

echo MathHelper::$name . PHP_EOL;
