/*
// Version one. Not efficient enough for very large numbers. I am being really explicit with intent right here, but I need to cut down on all of the looping.
*/
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
