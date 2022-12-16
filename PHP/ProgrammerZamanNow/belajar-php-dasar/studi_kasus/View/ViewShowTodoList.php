<?php

require_once __DIR__ . "/../Model/TodoList.php";
require_once __DIR__ . "/../BussinessLogic/ShowTodoList.php";
require_once __DIR__ . "/../View/ViewAddTodoList.php";
require_once __DIR__ . "/../View/ViewRemoveTodoList.php";
require_once __DIR__ . "/../Helper/Input.php";

function ViewShowTodoList() 
{
	while(true){
	showTodoList();

	echo "MENU" . PHP_EOL;
	echo "1. Tambah Todo" . PHP_EOL;
	echo "2. Hapus Todo" . PHP_EOL;
	echo "x. Keluar" . PHP_EOL;

	$pilihan = input("Pilih : ");

	if($pilihan == "1") {
		ViewAddTodoList();
	} else if($pilihan == "2"){
		ViewRemoveTodoList();
	} else if($pilihan == "x"){
		break;
	} else {
		echo "Pilihan tidak di mengerti" . PHP_EOL;
	}
	}

	echo "Sampai Jumpa Lagi" . PHP_EOL;
}
