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