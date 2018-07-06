/*
// returns the sum of the sequence (1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16...) up to the nth member
*/
function SeriesSum(n){
  // Happy Coding ^_^
  let number = 0;
  for(let i = 0; i < n; i++){
    number += 1 / (1+(3*i)); 
  }
  return number.toFixed(2)
}