/*
// Returns the sum from 1 to 'n'
// If the input is not an integer, or it is an integer less than one, returns 'false'.
*/
function f(n) {
  if (!Number.isInteger(n) || n < 1) return false;
  return [...Array(n + 1).keys()].reduce((total, number) => total + number, 0);
  // Not efficient.
  // Exercise for later. Keep looking for an efficient way to make this both recursive and efficient.
  // return n !== 1 ? (n + f(n - 1)) : n;
}

// BEST SOLUTION
// function f(n){
//   return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
// };
