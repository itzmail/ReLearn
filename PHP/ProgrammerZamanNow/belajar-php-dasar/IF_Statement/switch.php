<?php
$nilai = "D";

switch($nilai) {
    case "A" :
        echo "Anda memuaskan";
        break;
    case "B" :
        echo "Sudah sewajarnya nilai anda segitu";
        break;
    case "C" :
    case "D" :
        echo "Masih ada kesempatan";
        break;
    default :
        echo "Udah ngga ada harapan";
}
