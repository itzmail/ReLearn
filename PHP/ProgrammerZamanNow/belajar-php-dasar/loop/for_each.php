<?php
/* Foreach merupakan looping khusus tipe data array */

$names = ['ismail', 'nur', 'alam'];

/* looping with for */
for($i = 0;$i < count($names); $i++) {
    echo "Data ke-$i = $names[$i]".PHP_EOL;
}

/* looping with foreach */

foreach ($names as $name) {
    echo "Hello $name" . PHP_EOL;
}

/* foreach dengan key atau index */

$person = [
    "first_name" => "Bambang",
    "middle_name" => "Sugi",
    "last_name" => "Steven"
];

foreach ($person as $key => $value) {
    echo "$key : $value" . PHP_EOL;
}