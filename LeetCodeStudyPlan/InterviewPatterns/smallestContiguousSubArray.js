// Given an array of positive integers and an integer 's', find the length of the smallest
// contiguous subarray whose sum is greater than or equal to 's'.
// return 0 if no such subarray exists;

let smallestContiguousSubArray = (array, s) => {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowEnd = 0 ; windowEnd < array.length ; windowEnd++) {
    windowSum+= array[windowEnd];

    while (windowSum >= s) {
      let length = (windowEnd - windowStart)+1;
      minLength = Math.min(minLength, length);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) return 0;
  return minLength;

}

console.log(smallestContiguousSubArray([1,3,2,2,4,5],6))
console.log(smallestContiguousSubArray([],7))