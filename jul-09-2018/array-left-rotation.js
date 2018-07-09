"use strict";
/*
// Returns a given array 'a' rotated 'd' times to the left.
// input one  -> [1,2,3,4,5], 2
// output one -> [3,4,5,1,2]
//==========================
// input two  -> [1,2,3,4,5], 4
// output two -> [5,1,2,3,4]
*/
function rotLeft(a, d) {
  return a.map((_, i) => a[(i + d) % a.length]);
}
