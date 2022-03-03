<?php

require_once "../Helper/Input.php";
require_once "../BussinessLogic/RemoveTodoList.php";

function ViewRemoveTodoList()
{
    echo "MENGHAPUS TODO" . PHP_EOL;

    $pilihan = (int)input("Pilih (0 untuk batal mengpus)");

    if($pilihan == 0){
        echo "BATAL MENGHAPUS TODO \n";
    } else {
        $succses = removeTodoList($pilihan);
        if($succses){
            echo "BERHASIL MENGHAPUS TODO pilihan ke-$pilihan" . PHP_EOL;
        } else {
            echo "GAGAL MENGHPUS TODO pilihan ke-$pilihan" . PHP_EOL;
        }
    }
}