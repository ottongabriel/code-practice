/*
// Returns the number of distinct ocurrences where a character is repeated in a string
// Such that:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .sort()
    .filter((letter, i, array) => letter === array[i - 1])
    .filter(
      (letter, i, array) => (array[i - 1] ? letter !== array[i - 1] : letter)
    ).length;
}

// BEST SOLUTION WITH REGEX:
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
// BEST SOLUTION CLEVER:
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(
      (val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    ).length;
}
