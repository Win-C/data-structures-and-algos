"use strict";

// Test cases
// 'abcde' => true
// 'aaa' => false
// 'aab' => false
// 'aba' => false
// '' => false

/** Function determines if a string has all unique characters
 *  Returns true or false
 * 
 *  Assumption that the string is in ASCII, max 128 characters
 * 
 *  Time complexity: O(n) where n is the length of the string
 *  Space complexity: O(1)
 */
function isUnique(str){
  if (str.length === 0) return false;
  if (str.length > 128) return false;

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
