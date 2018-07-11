/*
// Returns the minimum number of times that a number swapped ahead within an array.
// Receives an array representing a queue where some members have bribed the memeber
// ahead of them to swap. No member can swap more than twice. If it receives an array 
// where members had to have swapped more than twice it returns "Too chaotic"
// input one   -> 1 2 5 3 7 8 6 4
// output one* -> 7
================================
// input two  -> 5 1 2 3 7 8 6 4
// output two -> "Too chaotic"
*/
function minimumBribes(q) {
  return (
    q.reduce(
      (bribes, number, i) =>
        number - i - 1 > 2
          ? undefined
          : bribes + q.slice(0, i).filter(inner => inner > number).length,
      0
    ) || "Too chaotic"
  );
}

/*
// Explanation for output one:
// permutation 0: 1 2 3 4 5 6 7 8
//                       X
// permutation 1: 1 2 3 5 4 6 7 8
//                     X
// permutation 2: 1 2 5 3 4 6 7 8
//                           X
// permutation 3: 1 2 5 3 4 7 6 8
//                         X
// permutation 4: 1 2 5 3 7 4 6 8
//                             X
// permutation 5: 1 2 5 3 7 4 8 6
//                           X
// permutation 6: 1 2 5 3 7 8 4 6
//                             X
// permutation 7: 1 2 5 3 7 8 6 4
*/
