"use strict";

// Test cases
// 'abcde' => true
// 'aaa' => false

/** Function determines if a string has all unique characters
 *  Returns true or false
 * 
 *  Time complexity: O(n) where n is the length of the string
 *  Space complexity: O(1)
 */
function isUnique(str){
  if (str.length === 0) return false;

  let charSeen = new Map(); // Create a hash to store letters seen

  for (let char of str){
    if(charSeen[char]) return false;

    charSeen[char] = true;
  }

  return true;
}

console.assert(isUnique('abcde') === true);
console.assert(isUnique('aaa') === false);
console.assert(isUnique('') === false);
