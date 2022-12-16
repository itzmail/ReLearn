<?php

class Func_over 
{
    public function __call($name, $arguments)
    {
        $join = join(', ', $arguments);
        echo "Call function $name with arguments $join" . PHP_EOL;
    }

    public static function __callStatic($name, $arguments)
    {
        $join = join(', ', $arguments);
        echo "Call static function $name with arguments $join" . PHP_EOL;
    }
}

$func = new Func_over();
$func->sayHello("Ismail", '12');
Func_over::sayStaticHello("Ismail", '21');