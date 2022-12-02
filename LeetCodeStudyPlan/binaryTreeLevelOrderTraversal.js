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

let root = new Node(3);
let b = new Node(9);
let c = new Node(20);
let d = new Node(15);
let e = new Node(7);

root.left = b;
root.right = c;
c.left = d;
c.right = e;

var levelOrder = function(root) {

  if (!root) return [];

  let queue = [root];
  let levels = [];

  while(queue.length) {
    let queueLength = queue.length;
    let temp = [];
    for (let i = 0; i< queueLength; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
      temp.push(curr.val);
    }
    levels.push(temp);
  }
  return levels;
}

  //   // If root is null return an empty array
  //   if(!root) return []

  //   const queue = [root] // initialize the queue with root
  //   const levels = [] // declare output array

  //   while(queue.length !== 0){
  //      const queueLength = queue.length // Get the length prior to dequeueing
  //      const currLevel = [] // Declare this level
  //      // loop through to exhaust all options and only to include nodes at currLevel
  //      for(let i = 0; i < queueLength; i++){
  //          // Get next node
  //          const current = queue.shift()

  //          if(current.left){
  //              queue.push(current.left)
  //          }
  //          if(current.right){
  //              queue.push(current.right)
  //          }
  //          // After we add left and right for current, we add to currLevel
  //          currLevel.push(current.val)
  //      }
  //      // Level has been finished. Push into output array
  //      levels.push(currLevel)
  //  }
  //   return levels


console.log(levelOrder(root));