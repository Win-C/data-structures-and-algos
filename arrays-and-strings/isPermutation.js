"use strict";

// Given two strings, write a method that determines
// if one is a permutation of the other

// Test cases:
// 'tear', 'rate' => true
// 'read', 'reed' => false 
// '', 'aba' => false

/** Function checks if two strings are permutations 
 *  of the other 
 *  Takes in two strings
 *  Returns 
 *    - true if the strings are permutations of 
 *      each other
 *    - false, otherwise
 * 
 *  Time complexity: O(N) where N is the length of the string
 *  Space complexity: O(1) assuming ASCII characters only
 * 
 *  Alternative is to sort strings first at O(N*logN) then
 *  compare the strings
 *  Space complexity: O(1)
 * */
function isPermutation(str1, str2){
  if (str1.length !== str2.length) return false;

  let charFreq = {};

  for (let char of str1){
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  for (let char of str2){
    if (char in charFreq){
      charFreq[char]--;
    } else {
      return false;
    }

    if (charFreq[char] < 0){
      return false;
    }
  }

  return true;
}
