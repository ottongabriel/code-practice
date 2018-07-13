/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {
  return !lists
    ? null
    : lists
        .filter(node => node !== null)
        .map(node => {
          return node.flattenLinkedList();
        })
        .flattenArray()
        .sort((a, b) => a - b);
};

Object.prototype.flattenLinkedList = function() {
  let arr = [];
  const { next, val } = this;
  if (next !== null) {
    arr = arr.concat(next.flattenLinkedList());
  }
  return arr.concat(val);
};
Array.prototype.flattenArray = function() {
  return this.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? acc.concat(...curr.flattenArray())
        : acc.concat(curr),
    []
  );
};
