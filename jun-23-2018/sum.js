function f(n){
  if(!Number.isInteger(n) || n < 1) return false;
  return [...Array(n + 1).keys()].reduce((total, number) => total + number, 0);
  // return n !== 1 ? (n + f(n - 1)) : n;
};

// BEST SOLUTION
// function f(n){
//   return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
// };