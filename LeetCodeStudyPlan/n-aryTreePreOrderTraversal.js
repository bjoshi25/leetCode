// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// OICE
// OUTPUT - Pre-Order Traversal
// INPUT - N-ary tree
// Constraints - Each set of children are separated by null
// edge case - none


var preorderRecursive = function(root) {

  let storage = [];

  let helper = (root, arr) => {
    if (root === null) return arr;
    arr.push(root.val)
    if (root.children) {
        for (var i = 0; i < root.children.length; i++) {
             arr = arr.concat(preorder(root.children[i]))
        }
    }
    return arr;
  }

  let stack = helper(root, storage);
  return stack;
};

var preorderIterative = function(root) {

  if (root === null) {
    return []
  }
  let storage = [];
  let stack = [root];

  while(stack.length > 0) {
    var curr = stack.pop();

    if (curr.children) {
      for (var i = 0; i<curr.children.length; i++) {
        stack.push(curr.children[i]);
      }
    }
    storage.push(curr.val);
  }
  return storage;
};