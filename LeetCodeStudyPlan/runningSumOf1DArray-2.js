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
// OUTPUT - Array of numbers which are running sum of elements of the input array
// INPUT - An array of numbers
// Constraints - none
// Edge cases - none

// Declare a runningSum to sum all the elements and initialize it with nums[0];
// Declare a runningSum Array to store the running sum
// Iterate over the given array from 1 to array.length-1
  // update runningSum with current element
  // push it runningSum array
// return runningSum Array;

var runningSum = function(nums) {
  let runningSum = nums[0];
  let runningSumArray = [runningSum];
  for (let i = 1; i< nums.length; i++) {
    runningSum+= nums[i];
    runningSumArray.push(runningSum);
  }
  return runningSumArray;
};

var runningSum_2 = function(nums) {
  for (let i = 1; i< nums.length; i++) {
    nums[i]+= nums[i-1];
  }
  return nums;
};

console.log(runningSum_2(nums = [1,2,3,4]));