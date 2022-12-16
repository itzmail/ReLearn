<?php

require_once "../View/ViewAddTodoList.php";
require_once "../BussinessLogic/ShowTodoList.php";
require_once "../BussinessLogic/AddTodoList.php";


addTodoList('Ismail');
addTodoList('Nur');
addTodoList('Alam');

ViewAddTodoList();

showTodoList ();