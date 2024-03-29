// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2) {
  let head = new ListNode();
  let currentNode = head.next;

  while (list1 && list2) {
    if (list.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1||list;

  return head.next;

};