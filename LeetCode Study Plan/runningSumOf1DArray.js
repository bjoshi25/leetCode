// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// OICE
// INPUT - an array of numbers
// OUTPUT - an array of running sums of the numbers in input Array
// CONSTRAINTS - none
// EDGE CASES - Empty Array?

// Define an array
// Check for edge cases
  // return empty array if input array is empty
  // else
    // traverse over the array using a counter - i
      // for each number in the array, start another counter - j
      // and add all the numbers from 0 upto i
      // push to output array
  // return output array

const runningSum = function(nums) {
  for (var i = 1; i < nums.length; i++){
    nums[i] += nums[i-1];
  }
  return nums;
}