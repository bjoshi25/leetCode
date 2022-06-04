const smallestSubArray = (array, s) => {

  let windowStart = 0,
    sum = 0,
    minLengthSoFar = Infinity;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];

      while (sum >= s) {
        let currentLength = i - windowStart + 1;
        minLengthSoFar = Math.min(minLengthSoFar, currentLength);
        sum -= array[windowStart];
        windowStart++
      }
    }

    if (minLengthSoFar === Infinity) {
      return 0;
    }

    return minLengthSoFar;
}

console.log(smallestSubArray([1,3,2,2,4,5], 6));
console.log(smallestSubArray([1,2,3,4,5,8], 7));

// find the length of smallest sub array where the sum of all elements in the sub array is >= S
// given array = [1,3,2,2,4,5], and S = 6, ANSWER --> length = 2, sub array = [2,4]
// given array = [1,2,3,4,5,8], and S = 7, ANSWER --> length = 1, sub array = [8]
