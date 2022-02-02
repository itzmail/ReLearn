<?php
/*Basic Variable
 * PHP untuk membuat variable kita harus menggunakan $(dollar_sign) 
 * Untuk tipe datanya  sendiri bisa berubah, semisal dari string bisa berubah menjadi integer
 * */

$name = 'Ismail';
$age = '100';

echo 'Nama : ';
echo "$name \n";

echo 'Age : ';
echo $age;

/* Variable Variables
 * Variable ini mengidentifikasikan diri mereka dengan value string variable sebelumnya
 * */

$var = 'let';
$$var = 'const';

echo 'variable dari var : ';
echo $var;
echo "\n";

echo 'variables dari nilai string $var : ';
echo $let; //Variable let terbentuk dari value $var
echo "\n";
