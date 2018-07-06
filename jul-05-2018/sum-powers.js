/*
// Returns an array with all of the numbers in a range from 'a' to 'b' where
// the sum of all of their digits raised to consecutive powers starting at one
// equal the number itself. EG: 81 would qualify since 8^1 + 9^2 = 81.
// input one -> 1, 100 
// output one -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// =============================================
// input two -> 50, 150 
// output two -> [89, 135]
// =============================================
// If no numbers in the range match the criteria, it returns an empty array:
// input three -> 90, 100
// output three -> []
*/

// Version one. Not efficient enough for very large numbers. I think I am being
// really explicit with intent right here, but it loops to much for large numbers.
const sumDigPow = (a, b) =>
  [...Array(b + 1)]
    .map((_, i) => i)
    .slice(a)
    .filter(
      num =>
        num
          .toString()
          .split("")
          .reduce((acc, digit, i) => acc + Math.pow(digit, i + 1), 0) === num
    );

// Version two. Efficient enough to pass all of the tests,
// but I feel it can still be improved.
function sumDigPow(a, b) {
  const holder = [];
  for (let i = a; i < b; i++) {
    const theSum = i
      .toString()
      .split("")
      .reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);

    if (theSum === i) holder.push(i);
  }
  return holder;
}

// NOTABLE SOLUTIONS
// BY CrazyMerlyn, michaelO93:
function filterFunc(n) {
  return (
    `${n}`
      .split("")
      .map((x, i) => x ** (i + 1))
      .reduce((a, b) => a + b) == n
  );
}

function* range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}
// NOTE THE USE OF THE Array.from()
// Remember that the Array.from function can be used to create an array from
// an iterable passed in. So you could do something like:
// Array.from(Object.values(obj))
// Assuming that 'obj' is an object literal you have defined earlier.
// NOTE THE USE OF 'yield'
// Remember to look at it in more depth.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
