/*
// Returns a multiplication table with 'rows' rows and 'cols' columns
// input -> 3,4
// output -> [[1,2,3,4],[2,4,6,8],[3,6,9,12]]
// re-organized output for visialization:
// [
//  [1,2,3,4],
//  [2,4,6,8],
//  [3,6,9,12]
// ]
*/
const multiplicationTable = (rows, cols) =>
  [...Array(rows)].map((row, rowIndex) =>
    [...Array(cols)].map((col, colIndex) => (rowIndex + 1) * (colIndex + 1))
  );
