<?php
/*Constructor di anonymous class sama seperti di class sebelumnya*/

interface HelloYou {
  function sayHello(): void;
}

$helloYou = new class('Ini Parameter') implements HelloYou {
    public string $name;

    public function __construct(string $name)
    {
      $this->name = $name;
    }

    public function sayHello(): void
    {
      echo "Hello $this->name" . PHP_EOL;
    }
};

$helloYou->sayHello();
