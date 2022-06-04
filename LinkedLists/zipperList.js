class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(8);
let c = new Node(9);
let d = new Node(2);
a.next = b;
b.next = c;
c.next = d;

let p = new Node('p');
let q = new Node('q');
// let r = new Node('r');
// let s = new Node('s');
p.next = q;
// q.next = r;
// r.next = s;

const Recursive = (node, prev = null) => {

}

const Iterative = (head1, head2) => {

  // curr1 traces through list1 and curr2 traces through list2
  // declare variables
    // let curr1 = node1, curr2 = node2, count = null and tail = null
  // while curr1 and curr2 are not null
    // if count === null
      // let tail = curr1
      // curr1 = curr1.next
      // count = 0;
    // if count is even
      // tail.next = curr2
      // curr2 = curr2.next
      // count++
    // if count is odd
      // tail.next = curr1
      // curr1 = curr1.next
      // count++

  // tail.next = curr1;
  // return tail;
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let count = 0;

  // console.log('curr1', curr1);
  // console.log('curr2', curr2);
  // console.log('tail1', tail);

  while (curr1 !== null && curr2 !== null) {

    if (count % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count++;
  }
  if (curr1 === null) {
    tail.next = curr2;
  }
  if (curr2 === null) {
    tail.next = curr1;
  }
  return head1;
}

let iterative = Iterative(a, p);
console.log('result2', iterative);

