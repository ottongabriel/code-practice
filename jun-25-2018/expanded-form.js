/*
// Recieves an integer (assumes). Returns a string in the form of:
// input -> 70304
// outpu -> '70000 + 300 + 4'
*/
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((digit, index) => `${digit}${"0".repeat(index)}`)
    .filter(digit => digit[0] !== "0")
    .reverse()
    .join(" + ");
}

// BEST RESPONSE:
// const expandedForm = n =>
//   n
//     .toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");
