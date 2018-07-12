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
 * Runtime 136 ms
 */
let findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter(
      (number, i, arr) =>
        (arr.length % 2 === 0 && arr.length / 2 - 1 === i) ||
        (arr.length % 2 === 0 && arr.length / 2 === i) ||
        (arr.length % 2 !== 0 && Math.floor(arr.length / 2) === i)
    )
    .reduce((acc, number, i) => (acc + number) / (i + 1), 0);

// Improved solution:
let findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter(
      (number, i, arr) =>
        (arr.length % 2 === 0 && arr.length / 2 - 1 === i) ||
        (arr.length % 2 === 0 && arr.length / 2 === i) ||
        (arr.length % 2 !== 0 && Math.floor(arr.length / 2) === i)
    )
    .reduce((acc, number, i) => (acc + number) / (i + 1), 0);
