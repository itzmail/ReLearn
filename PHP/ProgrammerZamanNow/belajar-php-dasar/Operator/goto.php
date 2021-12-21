<?php
/* Goto operator
Fungsi dari goto operator ialah untuk loncat-loncat kode program
Pada umumnya bahasa php berjalan dari atas ke bawah kiri ke kanan. Kalau pakai goto Operator kode program tersebut bisa berjalan sesuka hati

Agar goto bisa loncat maka perlu dibuat label
*/

// contoh
echo "Pergi menuju lokasi blok A" . PHP_EOL;
goto a;

echo "Lokasi blok B \n";

a:
echo "Anda sudah sampai di lokasi blok A" . PHP_EOL;

/* Operator GoTo dipakai untuk  */
$counter = 1;
while(true) {
    echo "Looping ke-$counter" . PHP_EOL;
    $counter++;
    if($counter >= 10) {
        goto end;
    }
}

end :
echo "Looping selesai";