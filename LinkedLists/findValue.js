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

const Recursive = (node, target) => {
  if (node === null) return false;

  if (node.value === target) {
    return true;
  } else {
    return Recursive(node.next, target);
  }
}

const Iterative = (node, target) => {
  current = node;
  while(current !== null) {
    if (current.value === target) {
      return true
    }
    current = current.next;
  }
  return false;
}

let result1 = Recursive(a, 9);
console.log('result1', result1);

let result2 = Iterative(a, 9);
console.log('result2', result2);

