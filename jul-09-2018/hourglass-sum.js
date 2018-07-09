"use strict";

/*
// Returns the largest hourglass sum within a 2D array of numbers.
// An houglass sum is the sum of all of the numbers that form an houglass.
// One example would be adding all of the ones in the following array:
// [ [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 1, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 1, 1, 1, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ] ]
// It is more of a side-ways "H", but I didn't name it.
// Input ->
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
//
// Output -> 28
*/
function hourglassSum(arr) {
  const sumsHolder = [];
  for (let y = 1, rows = arr.length; y < rows - 1; y++) {
    for (let x = 1, columns = arr[y].length; x < columns - 1; x++) {
      // prettier-ignore
      sumsHolder.push(
        arr[y - 1][x - 1] +
        arr[y - 1][x] +
        arr[y - 1][x + 1] +
        arr[y][x] +
        arr[y + 1][x - 1] +
        arr[y + 1][x] +
        arr[y + 1][x + 1]
      );
    }
  }
  return Math.max(...sumsHolder);
}
