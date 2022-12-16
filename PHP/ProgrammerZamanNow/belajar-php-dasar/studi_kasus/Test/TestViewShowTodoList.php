<?php

require_once "../View/ViewShowTodoList.php";
require_once "../BussinessLogic/AddTodoList.php";

addTodoList('Ismail');
addTodoList('Nur');
addTodoList('Alam');

ViewShowTodoList();
