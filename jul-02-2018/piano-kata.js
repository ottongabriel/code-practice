/*
// Returns the color of the key pressed if, on an 88 key standard piano, 
// someone were to press keys starting at the left-most one and moving one
// to the right and then starting over at the left-most one if they run out of keys.
*/
function blackOrWhiteKey(keyPressCount) {
  const keys = [
    "white",
    "black",
    "white",
    "white",
    "black",
    "white",
    "black",
    "white",
    "white",
    "black",
    "white",
    "black"
  ];

  return keys[((keyPressCount - 1) % 88) % 12];
}

/*
// MOST CLEVER SOLUTION BY zoleee80:
*/
function blackOrWhiteKey(keyPressCount) {    
  return ['black','white'] [ '101101011010'[((keyPressCount-1)%88)%12] ]
}
// I didn't know that you could do this with an array. 
// so ['black', 'white'][0] will evaluate to 'black'
// Need to keep that in mind
