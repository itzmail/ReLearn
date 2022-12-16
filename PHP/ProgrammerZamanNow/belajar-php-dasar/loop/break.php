<?php
/**
 * Break
 * Seperti yang kita ketahui di percabangan menggunakan switch ketika kita menjalankan suatu case maka bila sesuai dengan kondisi yang ada di case tersebut maka harus diberi break di akhir case
 */

$counter = 1;

while(true) {
    echo "Looping ke-$counter" . PHP_EOL;
    $counter++;

    if ($counter > 10) {
        break;
    }
}