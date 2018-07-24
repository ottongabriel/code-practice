/**
 * takes two arrays of equal length and returns the index of the smallest difference.
 * Assumes that bth arrays will be of the same length and that they only
 * contain numbers. Assumest that numbers in the first array will always be greater
 * than those with the same index in the second array. If there are multiple
 * instances of the smallest difference return the one where the value in the second
 * array was greatest.
 *
 * input one  -> ([6, 4],[1, 2])
 * output one -> 1
 *
 * input two  -> ([1,2,3,4,5],[0,1,2,3,4])
 * output two -> 4
 */

function bestMatch(ALAHLYGoals, zamalekGoals) {
  let smallestDifference = ALAHLYGoals[0] - zamalekGoals[0];
  let smallestDifferenceIndex = 0;
  let bestScore = 0;
  for (let i = 1, { length } = ALAHLYGoals; i < length; i++) {
    let currentDifference = ALAHLYGoals[i] - zamalekGoals[i];
    if (
      currentDifference < smallestDifference ||
      (currentDifference === smallestDifference &&
        ALAHLYGoals[i] > ALAHLYGoals[smallestDifferenceIndex])
    ) {
      smallestDifference = currentDifference;
      smallestDifferenceIndex = i;
      bestScore = ALAHLYGoals[i];
    }
  }
  return smallestDifferenceIndex;
}

/**
 * BEST SOLUTION:
 */
function bestMatch(aGoals, bGoals) {
  return bGoals.reduce(
    (best, goals, i) => {
      const diff = aGoals[i] - goals;
      return !best.d || (diff < best.d || (diff === best.d && goals > best.v))
        ? { d: diff, v: goals, i }
        : best;
    },
    { d: null, g: null, i: null }
  ).i;
}
