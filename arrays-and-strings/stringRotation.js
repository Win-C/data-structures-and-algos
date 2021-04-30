"use strict";

// Assume you have a method isSubstring which checks if one
// word is a substring of another. Given two strings, s1 
// and s2, write code to check if s2 is a rotation of s1
// using only one call to isSubstring

// Example
//  'waterbottle' is a rotation of 'erbottlewat'

// Logic:
// 'waterbottlewaterbottle' contains 'erbottlewat'
// Algorithm:
// 1) check if length of s1 and s2 are equal
// 2) if true, check that length of s1 and s2 are not equal to 0
// 3) if true, then create a variable of s1s1
// 4) check that s1s1 includes s2
// 5) if true, return true
// 6) otherwise, return false in other cases


/** Function checks whether a string is a rotation of another string
 * 
 * @param {*} s1 is a string
 * @param {*} s2 is a string
 * 
 * Time complexity: O(N) where N is the length of s1s1
 * Space complexity: O(1)
 */
function isRotatedString(s1, s2) {
  if (s1.length === s2.length && s1.length !== 0) {
    const s1s1 = s1 + s1;
    return s1s1.includes(s2);
  }
  return false;
}

// Test Cases
const s1 = 'waterbottle';
const s2 = 'erbottlewat';

console.assert(isRotatedString(s1, s2) === true);