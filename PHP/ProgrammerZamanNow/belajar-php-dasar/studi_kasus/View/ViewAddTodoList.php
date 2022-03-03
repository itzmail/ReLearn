<?php

require_once "../BussinessLogic/AddTodoList.php";
require_once "../Model/TodoList.php";
require_once "../Helper/Input.php";

function ViewAddTodoList()
{
    echo "Menambah TODO" . PHP_EOL;
    
    $todo = input("Todo (0 untuk batal)") . PHP_EOL;


    if($todo != 0) {
        addTodoList($todo);
    } else {
        echo "Kamu Batal Menambah Todo List" . PHP_EOL;
    }
    
}