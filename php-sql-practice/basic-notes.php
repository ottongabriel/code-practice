<?php
/*
// SPACESHIP OPERATOR
*/
// (expr1) <=> (expr2)
// returns 1 if the left is greater
// returns 0 if they are the same
// returns -1 if the right is greater

// PHP 5.x:
usort($arr, function ($a, $b) {
  if ($a == $b) {
    return 0;
  } elseif ($a > $b) {
   return 1;
  } else {
    return -1;
  } 
});

// PHP 7.X
usort($arr, funciton ($a, $b) {
  $a <=> $b
});

?>
