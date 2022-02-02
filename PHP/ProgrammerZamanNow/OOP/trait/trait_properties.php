<?php
namespace Data\Traits_Properties;

trait HasName {
    public string $name;
}

class Properties {
    use HasName;
}

$props = new Properties();
$props->name = "Ismail";
var_dump($props);