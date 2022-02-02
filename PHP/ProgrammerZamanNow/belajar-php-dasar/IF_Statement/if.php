<?php
$nilai = 90;
$total_murid = 100;

// dua macam penulisan constant
define('ACCEPT', 'Selamat kalian lulus');
const DECLINE = 'Maaf anda belum berhasil';

if($nilai >= 75 && $total_murid >= 50) {
    echo ACCEPT;
} else {
    echo $DECLINE;
}

