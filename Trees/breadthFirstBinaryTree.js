class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const breadthFirst = (node) => {

  // input is root node
  // use 'que' data structure to implement this
    // first-in-first-out

  // initiate que with root node
  // while que is not empty
    // pop the element from front of que
      // inspect the element
        // do something with it
        // check if children of this node exist
          // if yes, add to que going from left to right

  let que = [ node ];
  while (que.length) {
    const currentNode = que.shift();
    console.log(currentNode.value);
    if (currentNode.left) {
      que.push((currentNode.left));
    }
    if (currentNode.right) {
      que.push((currentNode.right));
    }
  }
}

breadthFirst(a);

