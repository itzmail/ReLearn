<?php

require_once "../Model/TodoList.php";
require_once "../BussinessLogic/ShowTodoList.php";

$todolist[1] = "Belajar Todo" . PHP_EOL;
$todolist[2] = "Belajar php Dasar" . PHP_EOL;
$todolist[3] = "Belajar php OOP" . PHP_EOL;
$todolist[4] = "Belajar php Database" . PHP_EOL;

showTodoList();