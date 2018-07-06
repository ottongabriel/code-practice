/*
// Remove duplicates from array.
// Following are a few approaches for the task of removing 
// duplicate values from an array.
// this is taken from this video:
// https://www.youtube.com/watch?v=dvPybpgk5Y4
*/

let a = [1, 2, 5, 2, 1, 8];

// One way to do it is to have a holder array to keep track of all of the values
// we have already seen
function rmDups(arr) {
  let holder = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (holder.indexOf(arr[i]) === -1) {
      holder.push(arr[i]);
    }
  }

  return holder;
}

// Another way is to set all of the keys in an object to be the numbers in the array
// since the keys must be unique, the duplicates will be removed:
function rmDups(arr) {
  obj = {};

  for (let number of arr) {
    obj[number] = true;
  }

  return Object.keys(obj);
}

// ES2016 has sets as a data type. Sets only take unique values.
// So you can return the spread of a set:
function rmDups(arr) {
  return [...new Set(arr)];
}

// my solution:
const rmDups = arr =>
  arr.reduce((acc, num) => (acc.includes(num) ? acc : acc.concat(num)), []);
