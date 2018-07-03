/*
// Retunrs how many times someone at height "window" will see a ball pass by their
// window if it is dropped from a floor above them at height "h" and the ball
// has a bounciness of bounce. Bounciness being the height that the ball will reach 
// when bouncing in relation to the height from where it was dropped so that if the 
// ball was dropped from a heigth of 3 meters and the bounciness of the ball is 0.66
// the ball will reach a height of 1.98 meters on the first bounce.
// input -> h = 3, bounce = 0.66, window = 1.5 
// output -> 3
// REQUIREMENTS:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
*/

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let result = 1;

  for (let i = h * bounce; i > window; i *= bounce) {
    result += 2;
  }

  return result;
}

/*
// CLEVER SOLUTION USING RECURSION (by kdumo44, leclerc)
*/
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  return bouncingBall(h * bounce, bounce, window) + 2;
}
// Easily changed into:
const bouncingBall = (h, bounce, window) =>
  h <= 0 || bounce <= 0 || bounce >= 1 || window >= h
    ? -1
    : bouncingBall(h * bounce, bounce, window) + 2;

/*
// BEST SOLUTION SOLVING THE MATH PROBLEM:
*/
const bouncingBall = (h, b, w) =>
  b >= 1 || h < w || b <= 0
    ? -1
    : Math.ceil(Math.log(w / h) / Math.log(b)) * 2 - 1;
