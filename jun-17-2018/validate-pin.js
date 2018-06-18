
/*
// Validates that a pin number only has either 4 or 6 characters
// and that all of the characters are numbers.
*/
function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6){
    return false;
  }
  for (let i = 0; i < pin.length; i++){
    if(isNaN(parseFloat(pin.charAt(i)))){
      return false;
    }
  }
  return true;
}

// best answer:

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }