/**
 * Compose function
 */
let compose = (...arr) => val => arr.reduce((fn1, fn2) => fn2(fn1), val);

let addOne = x => ++x;

let raiseToPowerTwo = x => x ** 2;

let sqrRoot = x => x ** (1 / 2);

let minusOne = x => --x;

let roundabout = compose(
  addOne,
  raiseToPowerTwo,
  sqrRoot,
  minusOne
);

roundabout(6); // 6 // or exaclty the same thing that you put in, in a roundabout way
