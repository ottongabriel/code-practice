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