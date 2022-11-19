// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// OICE
// INPUT - An array of numbers
// OUTPUT - integer - index of the pivot element
// Constraints - Return the leftmost pivot index.
// Edge Case - Return -1 if not pivot index found.

// traverse over the array using a counter 'i'
  // declare variables to keep track of sum
  // traverse over the array using another counter 'j'
    // calculte sumLeft when j loops over 0 - i
    // calculate sumRight when j loops over i+1 - length-1
    // if sumLeft = sumRight
      // return index 'i'
// return -1

var pivotIndex = function(nums) {
  let sum = nums.reduce((r,n) => r + n, 0);
  let sumLeft = 0;
  for (var i = 0; i < nums.length; i++) {
    let sumRight = sum - sumLeft - nums[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += nums[i];
  }
  return -1;
};