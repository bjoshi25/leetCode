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

const depthFirst = (node) => {

  // input is root node
  // use 'stack' data structure to implement this
    // first-in-last-out

  // initiate stack with root node
  // while stack is not empty
    // pop the element from front of que
      // inspect the element
        // do something with it
        // check if children of this node exist
          // if yes, add to front of stack going

  let stack = [ node ];
  while (stack.length) {
    const currentNode = stack.shift();
    console.log(currentNode.value);
    if (currentNode.right) {
      stack.unshift((currentNode.right));
    }
    if (currentNode.left) {
      stack.unshift((currentNode.left));
    }
  }
}

depthFirst(a);

const depthFirstRecursive = (node) => {

  // input is root node
  // use 'stack' data structure to implement this
    // first-in-last-out

  // initiate stack with root node
  // while stack is not empty
    // pop the element from front of que
      // inspect the element
        // do something with it
        // check if children of this node exist
          // if yes, add to front of stack going

  if (node === null) {
    return;
  } else {
    console.log('recursive solution successful', node.value);
  }

  if (node.left) {
    depthFirstRecursive(node.left)
  }
  if (node.right) {
    depthFirstRecursive(node.right)
  }

  // let stack = [ node ];
  // while (stack.length) {
  //   const currentNode = stack.shift();
  //   console.log(currentNode.value);
  //   if (currentNode.right) {
  //     stack.unshift((currentNode.right));
  //   }
  //   if (currentNode.left) {
  //     stack.unshift((currentNode.left));
  //   }
  // }
}

depthFirstRecursive(a);



