<?php

/**
 * Menampilkan semuat todo di list
 */

function showTodoList()
{
    global $todolist;

    echo "TODOLIST APP" . PHP_EOL;

    foreach($todolist as $number => $todo) {
        echo "$number. $todo" . PHP_EOL;
    }
}