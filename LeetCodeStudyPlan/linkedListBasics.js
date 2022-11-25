class Node {
  constructor(val) {
    this.val = val;
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

const iterative = (node) => {

  let currentNode = node;
  let sum = ''

  while(currentNode) {
    sum+= currentNode.val;
    currentNode = currentNode.next;
  }
  return sum;
}
var sum = '';
const recursive = (node) => {

  if (!node) {
    return
  }
  sum+= node.val;
  recursive(node.next);
  return sum;
}

let y = iterative(a);
let x = recursive(a)
console.log('recursive result', x)
console.log('iterative result', y)

