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

let sum1= 0;
let sum2= 0;

const Recursive = (node) => {
  if (node === null) return 0;
  sum1 += node.value + Recursive(node.next);
  return sum1;
}

const Iterative = (node) => {
  current = node;
  while(current !== null) {
    sum2 += current.value;
    current = current.next;
  }
  return sum2;
}

let result1 = Recursive(a);
console.log('result1', result1);

let result2 = Iterative(a);
console.log('result2', result2);

