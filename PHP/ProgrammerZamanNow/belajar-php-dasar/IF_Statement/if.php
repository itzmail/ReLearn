<?php
$nilai = 90;
$total_murid = 100;
$ACCEPT = 'Selamat anda diterima';
$DECLINE = 'Maaf anda belum berhasil';

if($nilai >= 75 && $total_murid >= 50) {
    echo "$ACCEPT";
} else {
    echo $DECLINE;
}

