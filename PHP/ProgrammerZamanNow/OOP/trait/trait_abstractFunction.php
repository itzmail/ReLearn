<?php

/*
* Trait Abstract function
* Selain Konkrin function, di trait juga kita bisa menambahkan abstract function
* Jika terdapat abstract function di trait, maka secara otomatis function tersebut harus di override di class yang menggunakan trait tersebut, 
* kalau tidak di override maka akan terjadi error
* */

trait CanRun {
    public abstract function run(): void;
}

class RunAway {
    use CanRun;

    function run(): void {
        echo "We were just run in this world" . PHP_EOL;
    }
}

$Run = new RunAway();
$Run->run();