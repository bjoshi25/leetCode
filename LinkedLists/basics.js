class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

const Iterative = (node) => {
  let current = node;
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

Iterative(a);

const Recursive = (node) => {
  if (node === null) return;
  console.log(node.value);
  Recursive(node.next);
}

Recursive(a);

