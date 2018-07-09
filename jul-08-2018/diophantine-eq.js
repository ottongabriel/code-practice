// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)

// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"

// Not eficient enough. Must find a way that cuts on the looping.
const solEquaStr = n => {
  arr = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if ((i - 2 * j) * (i + 2 * j) === n) {
        arr.unshift([i, j]);
      }
    }
  }
  return arr;
};

// Best solution By NMVikings:
function solequa(n) {
  let result = [];
  for (let d, x, y, i = 1; i <= Math.sqrt(n); i++) {
    if (
      Number.isInteger((d = n / i)) &&
      Number.isInteger((x = (d + i) / 2)) &&
      Number.isInteger((y = (d - i) / 4))
    ) {
      result.push([x, y]);
    }
  }
  return result;
}
// Note that you can initialize variables in the for loop and the assign values
// to them within an if sttement that will only run if those asignment evaluate
// to something truthy
