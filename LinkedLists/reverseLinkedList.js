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

const Recursive = (node, prev = null) => {
  if (node === null) return prev;
  let next = node.next;
  node.next = prev;
  return Recursive(next, node);
}

const Iterative = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

let recursive = Recursive(a);
console.log('result1', recursive);

let iterative = Iterative(a);
console.log('result2', iterative);

