var findMedianSortedArrays = function(nums1, nums2) {
  return [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter(
      (number, i, arr) =>
        Math.floor(arr.length / 2) === i || Math.ceil(arr.length / 2) === 1
    )
    .reduce((acc, number, i) => (acc + number) / (i + 1), 0);
};
