function printerError(s) {
  // your code
  let errorCount = s.split('').reduce((errors,character) => /[n-z]/.test(character) ? ++errors : errors + 0 , 0)
  
  return `${errorCount}/${s.length}`
}

// Testing code:
// let count = s.split('').reduce((errors,character) => {
//   if(/[n-z]/.test(character)){
//     console.log('errors found');
//     if(errors){
//       console.log('errors: ', errors);
//     }
//     return ++errors;
//   }
//   else{
//     return 0;
//   }
// }, 0)
// console.log('count: ', count);

// LESSON LEARNED: ++errors (as opposed to errors++) IS NECESSARY IN THIS CASE BECAUSE IT NEEDS TO BE EVALUATED BEFORE RETURNING.

// BEST SOLUTION :

// function printerError(s) {
//   return s.match(/[^a-m]/g).length + "/" + s.length;
// }