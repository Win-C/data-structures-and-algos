"use strict";

// Given a string, write a function to check if it is a
// permutation of a palindrome. A palindrome is a word or
// phrase that is the same forwards and backwards. A 
// permutation is a rearrangement of letters. The palindrome
// does not need to be linked to just dictionary words. 

/** Function checks if a string is a permutation of a
 *  palindrome
 *  Takes in a string (could have uppercase or lowercase letters)
 *  Returns
 *    - true, if string is a permutation of palindrome
 *    - false, otherwise
 */
function isPalindromePermutation(str){
  let charFreq = {};
  let numOdd = 0;

  if(str.length === 0) return false;

  for (let char of str){
    char = char.toLowerCase();
    if (char !== ' '){
      charFreq[char] = (charFreq[char] || 0) + 1;
    }
  }

  for (let key in charFreq){
    if ((charFreq[key] % 2) !== 0){
      numOdd++;
    } 
    if (numOdd >1){
      return false;
    }
  }
  return true;
}

// Test Cases
let str1 = "Tact Coa";
let str2 = "";
let str3 = "a";
let str4 = "ab";
let str5 = "abB";

isPalindromePermutation(str1); // true
isPalindromePermutation(str2); // false
isPalindromePermutation(str3); // true
isPalindromePermutation(str4); // false
isPalindromePermutation(str5); // true