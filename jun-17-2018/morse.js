/*
// This function receives a Morse-code message and returns the message decoded
// NOTE: one space indicates the end of a letter, three spaces indicates
// the end of a word.
*/
decodeMorse = function(morseCode){
  // eliminate all white-space surrounding the message. Then add one white space at the end to indicate the end of the codified message.
  const code = morseCode.trim() + ' ';
  // iniciate holder variables
  // the 'letter' variable will hold all of the coded character until a space is encountered and then that letter will be decoded and added to the message holder.
  let letter = '';
  let message = '';

  // Iterate through all of the characters in the string
  for(let i = 0; i < code.length; i++){
    // If the current chracter in the codified string is a space
    if(code[i] === ' '){
      // and the holder for letter is currently populated
      if(letter.length > 0){
        // decode the letter
        message += MORSE_CODE[letter];
        // empty out the letter holder
        letter = '';
      }
      // if the character received is a space AND there is nothing in the letter holder AND the last character in the decoded message is NOT a space, it means that we have to
      else if(letter.length === 0 && message[message.length -1] !== ' '){
        // introduce a space
        message += ' ';
      }
    } 
    // If the current chracter in the codified string is NOT a space
    else{
      // add that character to the letter holder
      letter += code[i];
    }
  }
  // When all character have been decoded, return the decoded string.
  return message;
}