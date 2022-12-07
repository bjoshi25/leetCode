var pivotIndex = function(nums) {
  let index = 0;
  let sumLeft = 0;
  let sumRight = 0;
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  while (index < nums.length) {
    sumRight = sum - nums[index] - sumLeft;
    if (sumLeft === sumRight) return index;
    else {
      sumLeft += nums[index];
      index++;
    }
  }
  return -1;
};

console.log(pivotIndex(nums = [-1,-1,0,1,1,1]));