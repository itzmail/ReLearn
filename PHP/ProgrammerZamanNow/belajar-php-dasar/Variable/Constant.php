<?php
/* Constant
 * Constant ini merupakan variable yang imutable
 *
 * Cara mendeklarasikan
 * menggunakan function define(nama var, value dari var); 
 * 
 * Best Practice => penulisan variable menggunakan UPPER_CASE
*/

define("AUTHOR", "Ismail Nura");
define("APP_VER", 10.10);

const NAMA = "Ismail Nur Alam"; // penulisan const yang terbaru

echo 'Author : ';
echo AUTHOR;
echo "\n";

echo 'Aplikasi Version : ';
echo APP_VER;
echo "\n";


echo 'Nama : ';
echo NAMA;
echo "\n";
