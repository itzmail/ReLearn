<?php
/*tipe data array merupakah wadah untuk menampung berbagai macam tipe data
 * bisa kosong, panjangya dinamis
 *
 * Penulisan ARRAY
 * 1. $nilai = array('e1', 'e2');
 * 2. $nilai = ['e1', 'e2'];
 * */

$nilai = array(1, 2, 'tiga');

$values = [1, 2, 'tiga'];
//var_dump($values);

$names = ["Ismail", "Kurniawan", "Khanedy"];

/*mengubah element array*/
$names[1] = "Jack";
//print $names[1];

/*menghapus data array*/
unset($names[1]);
// ketika dihapus maka elemen tersebut akan hilang jadi bila dihapus di tengah elemen, maka index element tersebut akan hilang

/* Menambahkan data array */
$names[1] = 'Joko';
var_dump(count($names)); // menghitung jumlah anngota array

/* Array sebagai Map
* Kebanyakan bahasa pemrograman, terdapat tipe data array => yaitu asosiasi antara key dan value
* NAMUN, di PHP, Map bisa dibuat menggunakan Array
* Indexya sebagai key
* Elementnya sebagai value
*/

// syntax map
$bagas = array(
    "id" => "bagas",
    "name" => "Bagas Pambudi",
    "age" => 32
);

/* Jadi
yang secara default
$bagas = array(
    0 => 'terserah',
    1 => 'oko'
)

angka index 0, 1, dst bisa diubah menjadi seperti diatas
*/

var_dump($bagas["id"]);

$names[] = "adalah";
var_dump($names);
