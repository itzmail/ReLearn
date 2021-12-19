<?php
/*Null merupakan value kosong
* */
$name = "Eko";
$name = null;

$age = null;

echo $name;
var_dump($name);

/*Untuk mengecek apakah data tersebut null atau tidak? menggunakan function is_null()
 *
**/
echo "apakah variable nama itu null : ";
var_dump(is_null($name));
echo "\n";
?>
