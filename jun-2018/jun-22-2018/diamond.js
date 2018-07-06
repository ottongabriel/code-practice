
/*
// Returns a figure in the shape of a diamond. 
// Input needs to be an odd integer greater than 0.
*/
function diamond(n){
  // if input is an odd integer greater than zero
  if(n > 0 && n % 2 !== 0) {
    // create the middle band. It will be a string of asterisks with length of 'n'
    let diam = `${'*'.repeat(n)}\n`;
    // start appending bands on top and bellow the middle band
    for(let i = n - 2; i > 0; i -= 2){
      // create the template for the bands that will be appended to the current structure
      let prefix = sufix = `${' '.repeat((n-i)/2)}${'*'.repeat(i)}\n`;
      // append the bands on top and bellow
      diam = `${prefix}${diam}${sufix}`
    }
    // return the resulting structure
    return diam;
  }
  // the input was either even or negative and thus invalid
  else{
    return null;
  }
}

// BEST SOLUTION:
// function diamond(n){
//   if (n % 2 === 0 || n < 2) { return null; }

//   let diam;
//   for (let i = n; i > 0; i = i - 2) {
//     let row = ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
//     diam = (i === n) ? row : row + diam + row;
//   }
//   return diam;
// }