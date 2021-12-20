<?php

/* Null Coelescing berguna sebagai pengecek apakah virabel tersebut null atau tidak
meskpun kita bisa menggunakan isnull tetapi untuk menghindari error karena bila kita belum membuat variable tersebut maka akan terjadi error
*/
$data = [
    "action" => null,
];

/* Tanpa Null Coalescing Operator */

if(isset($data['action'])) {
    $action = $data['action'];
} else {
    $action = 'nothing';
}

// echo $action; // outputnya nothing

/* Dengan Null Coalescing Operator 
menggunakan operator ??
*/

$respon = $data['action'] ?? "nothing";

echo $respon;