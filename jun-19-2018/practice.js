/*
// Returns the result of the adition of two decimal numbers in binary;
*/

function addBinary(a,b) {
  let remainder = a + b;
  let binaryDigits = [];

  while (remainder >= 1){
    binaryDigits.push((remainder % 2) === 0 ? 0 : 1);
    remainder = remainder % 2 === 0 ? remainder / 2 : Math.floor(remainder / 2);
  }
  
  return binaryDigits.reverse().join('');
}

/*
// Best solution, the Number.prototype.toString() function takes as an optional 
// argument an integer between 2 and 36 that determines the base of the number when 
// converting to a string. 2 will be binary. 16 will be hexadecimal.
*/

// function addBinary(a,b){
//   return (a+b).toString(2)
// }