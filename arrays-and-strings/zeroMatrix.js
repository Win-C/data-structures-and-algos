"use strict";

// Write an algorithm such that if an element in an MxN
// matrix is 0, its entire row and column are set to 0.

// [[1, 2, 3],      [[1, 0, 3],
//  [5, 0, 3],  =>   [0, 0, 0],
//  [3, 4, 6]]       [3, 0, 6]]

// Algorithm:
// 1) find zeroes and store row and col index values
// 2) change matrix rows and cols to 0s using stored values
// Edge cases: matrix is empty or no zeroes found

/** Function changes an element's entire row and column to 0
 *  in a MxN matrix if that element is 0
 * 
 * @param {*} matrix 
 * @returns matrix updated to include full row and col 0's
 * 
 * Time complexity: O(N*M) where N and M are the dimensions of the matrix
 * Space complexity: O(N*M) to house the two arrays for rows and columns
 */
function zeroMatrix(matrix) {
  let rowZeroes = [];
  let colZeroes = [];

  if (matrix.length === 0 || matrix[0].length === 0) return matrix;

  // Find 0's in matrix and store row and col indexes
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rowZeroes.push(row);
        colZeroes.push(col);
      }
    }
  }
  
  if (rowZeroes.length === 0 || colZeroes.length === 0) return matrix;
  
  // Update matrix, changing entire row and col to 0's
  for (let row of rowZeroes){
    for(let col = 0; col < matrix[row].length; col++){
      matrix[row][col] = 0;
    }
  }

  for (let col of colZeroes){
    for (let row = 0; row < matrix.length; row++){
      matrix[row][col] = 0;
    }
  }

  return matrix;
}

// Test case
const matrix = [[1, 2, 3], [5, 0, 3],[3, 4, 6]];
console.log(zeroMatrix(matrix));