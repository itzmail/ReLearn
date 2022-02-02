<?php
/* Or (||) */
echo "Or \n";
var_dump(true || false); //Output bool(true)
var_dump(false || false); //Output bool(false)
var_dump(true or true); //Output bool(true)
echo "\n";

/* And (&&) */
echo "And \n";
var_dump(true and true); // Output true
var_dump(true && false); // Output false
var_dump(false && false); // Output false
echo "\n";

/* Xor */
echo "Xor \n";
var_dump(true xor true); // Output false
var_dump(true xor false); // Output true