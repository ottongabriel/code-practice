/*
// Returns the highest scoring word on a string.
// The score of each word is calculated by the score of each of its letter.
// The score of each letter is the same as its position in the alphabet
// whereby a = 1 point, b = 2 points, c = e, et cetera.
// input -> 'man i need a taxi up to ubud'
// output -> 'taxi'
*/
function high(x) {
  return x
    .split(" ")
    .map(word => [
      word,
      word
        .split("")
        .reduce((total, letter) => total + letter.charCodeAt() - 96, 0)
    ])
    .sort((a, b) => b[1] - a[1])[0][0];
}
