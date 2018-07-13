let multiDArray = [[1], [2, [3, [4, [5], 6], 7], 8], 9];

console.log(multiDArray);

// function flattenArray(theArr) {
//   let flattenedArr = [];
//   for (let i = 0; i < theArr.length; i++) {
//     if (Array.isArray(theArr[i])) {
//       flattenedArr.push(...flattenArray(theArr[i]));
//     } else {
//       flattenedArr.push(theArr[i]);
//     }
//   }
//   return flattenedArr;
// }

function flattenArray(theArr) {
  let flattenedArr = theArr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return accumulator.concat(...flattenArray(currentValue));
    } else {
      return accumulator.concat(currentValue);
    }
  }, []);
  return flattenedArr;
}

flattenArray(multiDArray);

// added Jul 3 2018:

const flattenArray = theArr =>
  theArr.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? acc.concat(...flattenArray(curr))
        : acc.concat(curr),
    []
  );

flattenArray(multiDArray);

// added Jul 13 2018:

Array.prototype.flattenArray = function() {
  return this.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? acc.concat(...curr.flattenArray())
        : acc.concat(curr),
    []
  );
};
