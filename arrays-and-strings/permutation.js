"use strict";

// Test cases:
// 'water', 'rate' => true
// 'greed', 'deer' => true 
// 'read', 'reed' => false 
// 'boil', 'apple' => false
// 'test', '' => false

// Check if either string lengths are 0, returning false if this is the case
// Create a hash table that contains the letter frequency of the longer string
// then loop through the smaller string reducing the letter frequency count
// if a letter is not found or the remaining letter frequency is 0, return false
// If loop completes then return true

/** Given two strings, function checks if a string is permutation 
 *  of the other 
 *  Returns true or false
 * */
function isPermutation(str1, str2){
  if (str1.length === 0 || str2.length === 0) return false;


}
