// prettier-ignore
/*
// Receives an array. Returns a string describing if the array is sorted and how.
// Assumes that the array is valid and that there is only one answer
// The output is formated as such:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
*/
function isSortedAndHow(array) {
  if([...array].sort((a, b) => a - b).filter((number, i) => number === array[i]).length === array.length) return "yes, ascending";

  else if([...array].sort((a, b) => b - a).filter((number, i) => number === array[i]).length === array.length) return "yes, descending";
  
  else return "no";
}

// BEST SOLUTION:

// function isSortedAndHow(arr) {
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//          arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }

// REMEMER THE FUNCTIONS EVERY AND SOME!!!
