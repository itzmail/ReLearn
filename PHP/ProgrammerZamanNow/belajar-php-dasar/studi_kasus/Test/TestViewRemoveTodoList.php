<?php
require_once "../View/ViewRemoveTodoList.php";
require_once "../BussinessLogic/AddTodoList.php";
require_once "../BussinessLogic/ShowTodoList.php";
require_once "../Model/TodoList.php";

addTodoList('Ismail');
addTodoList('Nur');
addTodoList('Alam');

showTodoList();

ViewRemoveTodoList();

showTodoList();