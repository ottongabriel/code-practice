/*
// returns a string 's' copied 'n' times
*/
function repeatStr (n, s) {
  let repeatedString = '';
  for(let i = 0; i < n; i++){
    repeatedString += s;
  }
  return repeatedString;
}

// best solutions:

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// or:

// repeatStr = (n, s) => s.repeat(n)
