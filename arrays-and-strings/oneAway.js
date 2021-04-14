"use strict";

// There are three types of edits taht can be performed on strings:
// 1) insert a character
// 2) remove a character
// 3) replace a character
// Given two strings write a function to check if they are one edit 
// (or zero edits) away

/** Function checks if two strings are one edit away from
 *  being the same
 *  Takes in two strings
 *  Returns Boolean: 
 *    - true if the strings are one edit away
 *    - false otherwise
 * 
 *  Time complexity: O(N) where N is the length of the shorter string
 *  Space complexity: O(1)
 */
function isOneAway(str1, str2) {
  // Quick check if strings are the same
  if (str1 === str2) return true;

  // Fail fast if strings have length difference > 1
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let count = 0;

  // If strings are same length, check if only off by one
  if(str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++){
      if (str1[i] !== str2[i]) count++;
    }
    return count > 1? false : true;
  }

  // If strings have length difference of one
  const shortStr = str1.length < str2.length? str1 : str2;
  const longStr = str1.length < str2.length? str2: str1;
  let i = 0; // index for shorter string
  let j = 0; // index for longer string

  while (i < shortStr.length && j < longStr.length){
    if (shortStr[i] !== longStr[j]){
      count++;
      j++;
    } else {
      i++;
      j++;
    }
    if (count > 1) return false;
  }

  return true;
}


console.assert(isOneAway('pale', 'ple') === true);
console.assert(isOneAway('pales', 'pale') === true);
console.assert(isOneAway('pale', 'bale') === true);
console.assert(isOneAway('pale', 'bake') === false);
console.assert(isOneAway('pale', 'plead') === false);