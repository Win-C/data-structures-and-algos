"use strict";

// Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

// For example, given the following tree:

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5
// You should return 45, as it is (3 + 2) * (4 + 5).

/** Data structure to store a binary tree node */
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

/** Helper function to check if node is a leaf */
function isLeaf(node){
  return node.left === null && node.right === null;
}

/** Helper function to perform operations */
function operations(operator, leaf1, leaf2){
  if (operator === '+'){
    return leaf1 + leaf2;
  } else if (operator === '-'){
    return leaf1 - leaf2;
  } else if (operator === '*'){
    return leaf1 * leaf2;
  } else {
    return leaf1 / leaf2;
  }
}

function evalBinaryTree(root){
  // Base case is if there is no root
  if (!root) return 0;

  // If this is a leaf then return the value
  if (isLeaf(root)){
    return root.val;
  }

  // Using recursion for DFS to get to leaves of the tree
  let leftLeaf = evalBinaryTree(root.left);
  let rightLeaf = evalBinaryTree(root.right);

  // With the leaves, perform the operation
  return operations(root.val, leftLeaf, rightLeaf);
}

let root = new Node(
  '*',
  new Node(
    '+', 
    new Node(3), 
    new Node(2)
  ), 
  new Node(
    '+',
    new Node(4),
    new Node(5)
  )
);

console.assert(evalBinaryTree(root) === 45);