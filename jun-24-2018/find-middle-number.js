/*
// Receives an array with exactly 3 integers. 
// Assume that the are all different, but they are not necessarily in order. 
// Returns the index of the middle number such that:
// input -> [32, 4, 16]
// output -> 2
*/
var gimme = function(inputArray) {
  return inputArray.indexOf([...inputArray].sort((a, b) => a - b)[1]);
};

// THE BEST SOLUTION WAS ALMOST EXACTLY THE SAME
