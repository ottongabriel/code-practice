
/*
// Checks if every item in array1 has exactly one item in array2 that is the square of itself.
// If that is the case, returns true. Else, returns false
*/
function comp(array1, array2){
  if(!array1 || !array2) return false;

  //your code here
  const arr1 = array1.sort((a,b) => a - b);
  const arr2 = array2.sort((a,b) => a - b);

  const check = arr1
    .map((number,index) => number*number === arr2[index] ? true : false)
    .includes(false) ? false : true;

  return check;
}


// BEST SOLUTION
// function comp(array1, array2){
//   return !!array2 && !!array1 && array2.every( a=> array1.some( (b,i)=> a===b*b && delete array1[i] ) )  
// }

// CLEVER COMBINATION OF every() AND some()