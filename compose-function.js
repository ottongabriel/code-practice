/**
 * Compose function
 */
let compose = (...arr) => val => arr.reduce((fn1, fn2) => fn2(fn1), val);

let addOne = function(x) {
  return x + 1;
};

let addThree = compose(
  addOne,
  addOne,
  addOne
);

addThree(4); // 7
