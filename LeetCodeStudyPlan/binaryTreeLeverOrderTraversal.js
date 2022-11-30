// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

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

var levelOrder = function(root) {

  let queue = [root];
  let storage = [];

  while(queue.length > 0) {
    let curr = queue.shift();
    storage.push(curr.val);
    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }
  return storage;

};