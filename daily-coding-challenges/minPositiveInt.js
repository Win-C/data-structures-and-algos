"use strict";

// [3, 4, -1, 1] => 2
// [1, 2, 0] => 3
// [1] => 2

/** Given an unsorted array of integers, function finds the lowest
 *  missing positive integer
 *  Array of integers can contain negatives, zeroes, and duplicates
 *  Returns a positive integer
 * 
 *  Time complexity: O(n) where n is the length of the array
 *  Space complexity: O(1)
 * 
 */
function lowestPositiveInteger(arr) {
  let n = arr.length;

  // If there is no 1 in arr, that is the lowest positive integer
  if (!arr.includes(1)) return 1;

  // If arr length is 1 and already determined to contain a 1, then n+1
  if (n === 1) return 2;

  // Change all negatives, zeroes, and numbers > n to 1s
  // Arrays will then only contain positive numbers
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0 || arr[i] > n) arr[i] = 1;
  }


  for (let i = 0; i < n; i++) {
    let absVal = Math.abs(arr[i]);

    if (absVal === n) {
      arr[0] = - Math.abs(arr[0]);
    } else {
      arr[absVal] = - Math.abs(arr[absVal]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) return i;
  }

  if (arr[0] > 0) return n;

  return n + 1;
}

// Note: Alternative approach in Java
// TODO: Look into floyd cycle algorithm
// public int firstMissingPositive(int[] nums) {
//   int n = nums.length;
//   // pre-process array so that non-positive ints are overwritten with n + 1;
//   // why n + 1? coz this is the safest value to choose during 
//   // floyd cycle way which we are about to do in second for loop below
//   for(int i = 0; i < n; i++) {
//       if(nums[i] <= 0) nums[i] = n + 1;
//   }
  
//   // Take abs of A[i] and then make sure its within bounds and use that as index.
//   // This is also called as Floyd's cycle-finding algorithm or tortoise and the hare.
//   for(int i = 0; i < n; i++) {
//       int num = Math.abs(nums[i]);
//       if(num > 0 && num <= n) {
//           // Now indicate that the positive value num was found.
//           // We indicate this by setting nums[num - 1] as a negative value;
//           // Why does this work? We are using the negative sign in the array to indicate that 
//           // a positive value has been found. On the other hand, value itself is encoded in Math.abs(nums[i])
//           nums[num - 1] = -Math.abs(nums[num - 1]);
//       }
//   }
  
//   // Now check for the first value where nums[i] is not negative and we have found our answer
//   for(int i = 0; i < n; i++) {
//       if(nums[i] > 0) return i + 1;
//   }
//   return n + 1;
// }