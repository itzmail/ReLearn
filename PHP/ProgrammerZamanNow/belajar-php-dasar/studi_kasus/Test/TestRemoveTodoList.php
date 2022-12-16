<?php

require_once "../Model/TodoList.php";
require_once "../BussinessLogic/AddTodoList.php";
require_once "../BussinessLogic/RemoveTodoList.php";
require_once "../BussinessLogic/ShowTodoList.php";

addTodoList('Belajar');
addTodoList('Membaca');
addTodoList('Bekerja');
addTodoList('Olah Raga');

showTodoList();

removeTodoList(2);

showTodoList();