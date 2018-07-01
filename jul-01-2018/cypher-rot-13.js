/*
// Receives a sting and returns the same string coded with a Caesar cypher rot 13.
// input -> "Test"
// output -> "Grfg"
*/
function rot13(message) {
  return message
    .split("")
    .map(char => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(((char.charCodeAt() - 65 + 13) % 26) + 65);
      } else if (/[a-z]/.test(char)) {
        return String.fromCharCode(((char.charCodeAt() - 97 + 13) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}

/*
// BEST SOLUTIONS:
*/
// CLEVER BY PaulCalvelage:
function rot13(message) {
  var abc =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}
// NOTICE HOW HE CIRCUMVENTS ASCII ARITHMETIC BY CREATING AN ALPHABET TABLE.
// ALSO, DON'T FORGET THE REPLACE FUNCTION.
