
/*
// finds the element within an aray that is repeated an odd number of times within it.
// It is assumed that there is one number is repeated an odd number of times within the array.
*/
function findOdd(A) {
  //happy coding!
  for(let i = 0; i < A.length; i++){
    if(A.filter(number => number === A[i]).length % 2 !== 0){
      return A[i];
    }
  }
}

// CLEVER SOLUTION:
// function findOdd(A) {
//   return A.reduce(function(c,v){return c^v;},0);
// }

// WHERE '^' IS THE BITWISE XOR OPPERATOR.