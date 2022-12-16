<?php

/**
 * Debug Exception
 * Exception di PHP memiliki sebuah function bernama getTrace()
 * Function getTrace() berisikan informasi dari exception yang terjadi, seperti lokasi file, baris keberapa, function mana sampai argumentary yang dikirim di function tersebut apa
 * Ini sangat cocok untuk kita jika ingin mendebug ketika terjadi exception
 */

require_once 'intro.php';

$loginrequest = new LoginRequest();

try {
    validateLoginRequest($loginrequest);
} catch (ValidationException | Exception $exception) {
    echo "Ada error : {$exception->getMessage()}" . PHP_EOL;

    // Gunanya untuk debug errornya ada dimana
    var_dump($exception->getTrace());

    echo $exception->getTraceAsString();
}