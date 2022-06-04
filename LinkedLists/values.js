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

let values = [];

const Recursive = (node) => {
  if (node === null) return values;
  values.push(node.value);
  return Recursive(node.next);
}

let result = Recursive(a);
console.log('result', result);

