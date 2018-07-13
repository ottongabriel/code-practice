/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Returns the median value of two arrays.
 * Receives two arrays and returns the median value for all of the values
 * between both arrays.
 * input  -> [1, 2], [3, 4]
 * output ->   (2 + 3)/2   ->   2.5
 * Runtime 140 ms
 * (my own testing -> 0.2999 ms)
 */
let findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter(
      (number, i, { length }) =>
        (length % 2 !== 0 && Math.floor(length / 2) === i) ||
        (length % 2 === 0 && length / 2 - 1 === i) ||
        (length % 2 === 0 && length / 2 === i)
    )
    .reduce((acc, number, i) => (acc + number) / (i + 1), 0);

// This one also takes 140 ms which is surprising.
// I thought that directly accessing the array at the correct indices would be
// at least a bit faster...
// (my own testing -> 0.3000 ms)

let findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = arr.length;
  const medium = len / 2;
  if (len % 2 === 0) {
    return (arr[medium - 1] + arr[medium]) / 2;
  } else {
    return arr[Math.floor(medium)];
  }
};

// This one also had a runtime of 140 ms. I think that I am going to start testing
// somewhere else...
// (my own testing -> 0.3000 ms)
let findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .reduce((acc, number, i, { length }) => {
      if (length % 2 !== 0 && Math.floor(length / 2) === i) {
        return number;
      } else if (length % 2 === 0 && length / 2 - 1 === i) {
        return acc + number;
      } else if (length % 2 === 0 && length / 2 === i) {
        return (acc + number) / 2;
      } else {
        return acc;
      }
    }, 0);

// In conclusion, they all have the same efficiency more or less. 