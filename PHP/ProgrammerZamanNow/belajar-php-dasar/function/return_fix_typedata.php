<?php
function sum(int $first, int $second) : int // hasil dari function ini mereturn integer harus integer
{
    return $first + $second;
}

var_dump(sum(2,3)); 

function getFinalValue(int $value) : string
{
    if($value >= 80) {
        return "A";:
    } else if($value >=70) {
        return 'B';
    } else if($value >=60) {
        return 'C';
    } else if($value >=50) {
        return 'D';
    } else {
        return 'E';
    }

    return "Ini Hasil nilai mu"; // Return ini tidak ditampilkan karena bila sudah ketemu return di atasnya maka cukup sekali di return
}

getFinalValue(sum(23,50));
