<?php
/**
 * Jadi perbedaan dari for loop ialah
 * while loop tidak ada init statement dan juga post statement hanya ada kondisi
 * 
 * jadi bila kondisi bernilai false maka otomaits tidak bisa di jalankan
 */


$counter = 1;

/* while ($counter <= 10) {
    echo "Looping ke - $counter" . PHP_EOL;
    $counter = $counter + 2;
} */

/**
 * Do while
 * Konsepnya sama seperti while tetapi yang membedakan hanya dia akan melakukan looping minimal sekali meskipun kondisi bernilai false
 * kalau kondisi di while bernilai true maka "Do" akan melakukan looping lagi
 */

$hitungan = 1;

do {
    echo "Lakukan perulangan ke-" . $hitungan . "\n";
    $hitungan++;
} while($hitungan <=10);