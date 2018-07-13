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
        .map(node => node.flattenLinkedList())
        .flattenArray()
        .sort((a, b) => a - b);
};

Object.prototype.flattenLinkedList = function() {
  const { next, val } = this;
  return next !== null ? [val, next.flattenLinkedList()] : [val];
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
