function SeriesSum(n){
  // Happy Coding ^_^
  let number = 0;
  for(let i = 0; i < n; i++){
    number += 1 / (1+(3*i)); 
  }
  return number.toFixed(2)
}