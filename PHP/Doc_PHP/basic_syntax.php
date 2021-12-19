<?php
/* Perbedaan Echo dan Print */
    // echo 'use echo ', 'ada'; // works
    // print 'use print halo ada'; // tidak works kalau pakai koma
    // kesimpulan bahwa 'echo' sedikit lebih cepat dari pada 'print'

/* Variable syntax */
// Deklarasi variable di PHP menggunakan Dollar Sign ($)
    $var = 'Bob';
    $Var = 'Joe';
    // echo "$var, $Var";      // outputs "Bob, Joe"

    //$4site = 'not yet';     // invalid; starts with a number
    $_4site = 'not yet';    // valid; starts with an underscore
    $täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
    $boolean = 0;
    // echo "$boolean";

/* Value to Variable */
    $foo = 'Bob';
    $bar = &$foo; // variabel bar reference oleh variable foo
    $bar = "Your Name is $bar"; // value dari variable bar berubah
    // echo "$bar";

    // Ketika kita mereference variable maka ampersand(&) itu hanya berlaku variable yang sudak dideklarasikan, fungsi pun juga tidak bisa
    $foo = 25;
    $bar = &$foo;
    // $bar = (24 * 7); => ini tidak valid
    // echo "$bar";

    function test() 
    {
        return 25;
    }

    // $bar = &test(); => ini juga tidak valid
?>