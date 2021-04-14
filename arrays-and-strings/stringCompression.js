"use strict";

// Implememnt a method to perform basic string compression
// using the counts of repeated characters.
// For example, the string 'aabcccccaaa' would become 'a2b1c5a3'
// If the "compressed" string would not become smaller than the 
// original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters
// (a-z).

// Pseudocode:
// Create a variable to store compressed string
// Iterate through the string
    // for each char, check if it is the same as the prev
    // If it is the same
        //  increase counter
    // else 
        // add prev char plus counter to compressed string 
        // reset counter to 1
// return the shorter string: original vs. compressed string

/** Function compresses a string by counting repeated characters
 *  
 *  Time complexity: O(N) where N is the length of the string
 *  Space complexity: O(M) where M is the size of the compressedArr
 */
function compressString(s){
  if (s.length <=1 ) return s;

  let counter = 0; // Keep track of num of repeated char
  let compressedArr = [];
  let compressedStr;
  
  for (let i = 0; i < s.length; i ++){
    const currChar = s[i];
    const nextChar = s[i + 1];
    counter++;

    if (currChar !== nextChar || (i + 1 >= s.length)){
      compressedArr.push(currChar);
      compressedArr.push(counter);
      counter = 0;
    }
  }

  compressedStr = compressedArr.join('');

  return s.length > compressedStr.length? compressedStr : s;
}

