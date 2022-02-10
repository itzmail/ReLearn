<?php

class Zero {
    private array $properties = [];

    public function __get($name)
    {
        // echo "Access property $name" . PHP_EOL;
        return $this->properties[$name];
    }

    public function __set($name, $value)
    {
        $this->properties[$name] = $value;
        // echo "Set property $name with value $value" . PHP_EOL;
    }

    public function __isset($name): bool
    {
        return isset($this->properties[$name]);
        // echo "isset $name" . PHP_EOL;
        // return false;
    }

    public function __unset($name)
    {
        unset($this->properties[$name]);
        // echo "unset $name" . PHP_EOL;
    }
}

$zero = new Zero();
$zero->firstName = "Ismail";
$zero->middleName = "Nur";
$zero->lastName = "Alam";

var_dump($zero);

// untuk mengakses isset
// isset($zero->firstName);

// untuk mengakses usset
// unset($zero->firstName);

// echo "Nama awal : $zero->firstName" . PHP_EOL;
// echo "Nama tengah : $zero->middleName" . PHP_EOL;
// echo "Nama akhir : $zero->lastName" . PHP_EOL;