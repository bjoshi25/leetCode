// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// OICE
// OUTPUT - index of the target element (if it exists)
// INPUT - an array of numbers sorted in ascending order;
// Constraints - none
// edge cases - if element is not found, return -1;

// declare three variables - start = 0, end = arr.length-1, mid = (cal for even/odd sized arrays)
// declare index = -1;
// while start < end
// check target with element at mid index
  // if it matches,
    // return mid
  // else
    // if target < mid
      // end = mid
      // recalculate mid
    // else
      // start = mid
      // recalc mid
// return index

// function midpoint() {
//   return (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2;
// }

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((start + end)/2);
      if (target === nums[mid]) {
        return mid
      } else if (target < nums[mid]) {
        end = mid - 1;
      } else if (target > nums[mid]){
        start = mid +1;
      }
    }
    return -1;
};

console.log(search(nums = [-1,0,3,5,9,12], target = 9))
console.log(search(nums = [-1,0,3,5,9,12], target = 2))



