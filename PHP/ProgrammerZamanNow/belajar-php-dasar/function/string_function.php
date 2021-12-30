<?php
/*
* String function adalah function bawaan dari php yang berguna untuk memodifikasikan String
* 
* karena banyak bisa cek di link ini : https://www.php.net/manual/en/ref.strings.php*/

// contoh
echo "join";
var_dump(join(",", [1, 2, 3, 4, 5]));
var_dump(explode(" ", 'Ismail Nur Alam'));
var_dump(trim("    Ismail     "));
var_dump(substr("Ismail Nur Alam", 0, 10));
