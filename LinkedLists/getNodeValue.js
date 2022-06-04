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

const Recursive = (node, index) => {
  if (node === null) return null;

  if (index === 0) {
    return node.value;
  } else {
    return Recursive(node.next, index-1);
  }
}

const Iterative = (node, index) => {
  let count = 0
  current = node;
  while (current !== null) {
    if (count === index) {
      return current.value;
    } else {
      current = current.next;
      count++;
    }
  }
  return null;
}

let result1 = Recursive(a, 1);
console.log('result1', result1);

let result2 = Iterative(a, 3);
console.log('result2', result2);

