/*
// Returns the sum of all the integers beteen a range a, b.
// it assumes that the input is two integers, but they are not necessarily in order.
*/
function GetSum(a, b) {
  const n = [a, b].sort((a, b) => b - a);
  return (n[0] * (n[0] + 1)) / 2 - ((n[1] - 1) * (n[1] - 1 + 1)) / 2;
}

// FORMULAT FOR THE SUM OF ALL INTEGERS IN A RANGE:
// (N1(N1 + 1))/2 - ((N2-1)((N2-1) + 1))/2
// WHERE N1 IS THE LARGEST OF THE TWO INTEGERS.

// BEST SOLUTION:
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

// Much better solution since it is more readable.
