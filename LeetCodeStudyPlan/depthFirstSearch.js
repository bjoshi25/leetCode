class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

const iterative = (root) => {

  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();
    console.log(curr.val);
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
}

const recursive = (root) => {

  if (root === null) return;

  console.log(root.val);
  recursive(root.left);
  recursive(root.right);
}

console.log(recursive(root));