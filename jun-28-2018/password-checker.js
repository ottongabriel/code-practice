// prettier-ignore
/*
// Validates that a password:
// Is at least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// does not contain any non-alpha-numeric characters.
*/
function validate(password) {
  return /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^0-9a-zA-Z]).{6,}$)/.test(password);
}

// BEST SOLUTION:
function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
// I CAME VERY CLOSE!
// It is unnecessary to do a negative lookahead for non-alphanumeric symbols. You just need to make sure that all of the characters are alphanumerice and that is enough. I know, duh, but I didn't think that it would be enough.
