<?php
/**
 * continue digunakan untuk menghentikan perulangan saat ini 
 * jadi bila kondisi true maka perulangan tersebut akan di hentikan atau di skip 
 */
for($counter = 1; $counter <= 100; $counter++) {
    if($counter % 2 == 0) {
        continue;
    }
    echo "Looping ke- $counter \n";
}