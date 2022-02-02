<?php
/* For Loop  
for(init statement; kondisi; post statement){
    block perulangan
}

* init statement akan dieksekusi hanya sekali di awal sebelum perulangan
* Kondisi akan dilakukan pengecekan dalam setiap perulangan. 
jika true akan dieksekusi dan jika false akan dihentikan

* post statement akan dieksekusi setiap kali diakhir perulangan
* init; kondisi; post statuement tidak wajib di isi tetapi bila kondisi tidak diisi maka kondisi akan bernilai true secara default 
*/

/* Infinity loop */

/* for(; ;) {
    echo "Hallo for loop". PHP_EOL;
} */

/* Loop */
// $counter = 1; // ini merupakan init statement

/* for( ; $counter<=10; ){
    echo 'Halo for loop' . $counter . PHP_EOL;
    $counter++; // ini merupakan post statement
} */

// bila digabungkan

for ($counter = 1; $counter<=10; $counter++) {
    echo 'Halo for loop' . $counter . PHP_EOL;
}