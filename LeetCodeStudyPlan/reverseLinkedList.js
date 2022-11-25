/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// OICE
// OUTPUT - Reversed linked list
// INPUT - head of a linked list
// Constraints -
// Edge cases - empty list?

//


 var reverseListIterative = function(head) {

  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;

};

var reverseListRecursive = function(head, prev = null) {

  if (head === null) return prev;

  let next = head.next;
  head.next = prev;
  prev = head;
  return reverseList(next, prev);

};