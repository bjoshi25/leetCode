// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

// OICE
// OUTPUT - index of the node that the tail of cyclic linkedlist connects to
// INPUt - linked list
// Constraints -
// Edge cases - return -1 for non-cyclic list

// declare slow and fast pointer
// declare position = 0;
// if fast pointer and next of fast pointer is not null
  // check if slow and fast pointer is same
    // return pos
  // else increment slow, fast pointer and pos
// return -1


var detectCycle = function(head) {

  var getIntersect = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        return slowPointer;
      }
    }
    return null;
  }

  if (head === null) {
    return null
  };

  let intersect = getIntersect(head);

  if (intersect === null) return null;

  let pointer1 = head;
  let pointer2 = intersect;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
};