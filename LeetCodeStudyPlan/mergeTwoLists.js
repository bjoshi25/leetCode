// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

// OICE
// INPUT - Heads of two sorted lists
// OUTPUT - Head of new merged list
// Constraints - given lists are ordered in non decreasing order
// Edge Cases - Null lists

 var mergeTwoListsIterative = function(list1, list2) {
  let mergedList = new ListNode();

  let crtNode = mergedList;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      crtNode.next = list1;
      list1 = list1.next;
    } else {
      crtNode.next = list2;
      list2 = list2.next;
    }
    crtNode = crtNode.next;
  }

  crtNode.next = list1 || list2;

  return mergedList.next;
};

var mergeTwoListRecursive = function(list1, list2) {


};



