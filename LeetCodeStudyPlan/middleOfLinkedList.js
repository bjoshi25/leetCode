// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// OICE
// INPUT - singly linked list
// OUTPUT - head of the middle node of the linked list
// Constraints - none
// Edge Cases - If there are two middle nodes, then return the second middle node

var middleNodeBasic = function(head) {

  let current = head;
  let i = 0;
  let j = 1;

  while (current) {
    i++;
    current = current.next;
  }

  if (i % 2 === 0) {
    while(head) {
      if (j === i/2 +1 ) {
          return head;
      }
      else {
        j++;
        head = head.next;
      }
    }
  } else {
    while(head) {
      if (j === (i+1)/2) return head;
      else {
        j++;
        head = head.next;
      }
    }
  }

};

var middleNodeTwoPointer = function(head) {

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

var middleNodeArray = function(head) {

  let current = head;
  let storage = [current];

  while (current) {
    storage.push(current);
    current = current.next;
  }

  return storage[storage.length/2];
};