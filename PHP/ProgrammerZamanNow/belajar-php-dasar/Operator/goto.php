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