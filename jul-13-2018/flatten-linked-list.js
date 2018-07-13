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
 * OUTPUT: [1,1,2,3,4,4,5,6]
 */
Object.prototype.flattenLinkedList = function() {
  let arr = [];
  const { next, val } = this;
  if (next !== null) {
    arr = arr.concat(next.flattenLinkedList());
  }
  return arr.concat(val);
};
