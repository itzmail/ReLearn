<?php

require_once __DIR__ . "/../BussinessLogic/AddTodoList.php";
require_once __DIR__ . "/../Model/TodoList.php";
require_once __DIR__ . "/../Helper/Input.php";

function ViewAddTodoList()
{
    echo "Menambah TODO" . PHP_EOL;
    
    $todo = input("Todo (0 untuk batal)");


    if($todo != 0) {
        addTodoList($todo);
    } else {
        echo "Kamu Batal Menambah Todo List" . PHP_EOL;
    }
    
}