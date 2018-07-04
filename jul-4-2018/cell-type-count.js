/*
// Returns how many key presses would be necessary to type out a message 's' 
// on an old phone. 
// If a key has more than one character, a user would have to press that key 
// multiple times until they got to the desired character.
// The 'keys' array defines which characters are bound to which keys.
// input -> "HOW R U"
// output -> 13
*/
function presses(s) {
  const keys = [
    "1",
    "ABC2",
    "DEF3",
    "GHI4",
    "JKL5",
    "MNO6",
    "PQRS7",
    "TUV8",
    "WXYZ9",
    " 0"
  ];

  return s
    .toUpperCase()
    .split("")
    .reduce(
      (total, char) =>
        total + keys.filter(key => key.search(char) >= 0)[0].search(char) + 1,
      0
    );
}
