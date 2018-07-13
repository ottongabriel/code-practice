/**
 * Flattens a singly-linked list and returns a sorted array with
 * all of the elements of the list
 *
 * DEFINITION for singly-linked list:
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * INPUT:
 * [
 *   ListNode {
 *     val: 1, next: ListNode {
 *       val: 4, next: ListNode {
 *         val: 5, next: null
 *       }
 *     }
 *   },
 *   ListNode {
 *     val: 1, next: ListNode {
 *       val: 3, next: ListNode {
 *         val: 4, next: null
 *       }
 *     }
 *   },
 *   ListNode {
 *     val: 2, next: ListNode {
 *       val: 6, next: null
 *     }
 *   }
 * ]
 *
 * OUTPUT: [[1,4,5],[1,3,4],[2,6]]
 */
Object.prototype.flattenLinkedList = function() {
  const { next, val } = this;
  return next !== null ? [val, next.flattenLinkedList()] : [val];
};
