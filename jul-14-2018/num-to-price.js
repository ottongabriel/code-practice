/**
 * Formats a number to be deisplayed as a currency ammount.
 * Will truncate any decimal ammount beyon 2 decimal places and
 * will separate hundreds with commas
 *
 * input  -> 13253.5123
 * output -> 13,253.51
 */
var numberToPrice = function(number) {
  if (!number || isNaN(number)) {
    return "NaN";
  }
  return number.toTruncated(2).separateHundreds();
};

Number.prototype.toTruncated = function(n = 0) {
  const splitNumber = this.toString().split(".");

  if (splitNumber.length === 1) {
    splitNumber[1] = "0".repeat(n);
  } else if (splitNumber[1].length < n) {
    splitNumber[1] = splitNumber[1].concat("0");
  } else {
    splitNumber[1] = splitNumber[1].slice(0, n);
  }
  return splitNumber.join(".");
};
// this function needs work to be able to be used elsewhere
// I need to verify that the string it is being called on is a valid number
// ideally I would change this into something that takes a number and returns a string
String.prototype.separateHundreds = function(
  hundredsSeparator = ",",
  decimalSeparator = "."
) {
  const containsDecimals = this.includes(decimalSeparator);
  const stringWithoutDecimals = containsDecimals
    ? this.slice(0, this.indexOf(decimalSeparator))
    : this;
  const decimals = containsDecimals
    ? this.slice(this.indexOf(decimalSeparator))
    : "";
  return stringWithoutDecimals
    .split("")
    .reverse()
    .map(
      (number, i) =>
        i !== 0 && i % 3 === 0 && !isNaN(number)
          ? number.toString().concat(hundredsSeparator)
          : number
    )
    .reverse()
    .join("")
    .concat(decimals);
};

// BEST SOLUTION BY Grey, vasilukwolf, evgenygoldman
var numberToPrice = function(n) {
  return typeof n != "number"
    ? "NaN"
    : n
        .toFixed(3)
        .replace(/\d$/, "")
        .replace(/(\d)(?=(?:\d{3})+\.)/g, "$1,");
};
