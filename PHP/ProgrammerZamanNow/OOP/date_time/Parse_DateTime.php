<?php
$date = DateTime::createFromFormat("Y-m-d H:i:s", "2001-01-11 10:10:10", new DateTimeZone("Asia/Jakarta"));

var_dump($date);