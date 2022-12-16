<?php
/**
 * Menghapus Todo di List
 * 
 * Skema Method Remove TodoList
 * Data :
 * 1. Ismail
 * 2. Nur
 * 3. Alam
 * 
 * Yang mau dihapus dua. Jadi nanti key 3 digeser ke dua dan nanti kita unset data terakhir
 */

function removeTodoList(int $number) : bool
{
    global $todolist;
    
    if($number > sizeof($todolist)) {
        return false;
    }

    for($i= $number; $i < sizeof($todolist); $i++) {
        $todolist[$i] = $todolist[$i + 1];
    }

    unset($todolist[sizeof($todolist)]);
    
    return true;
}