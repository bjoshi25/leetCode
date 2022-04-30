const bruteForceMethod = (array, integer) => {
  let averages = [];
  for (let i = 0; i <= array.length - integer; i++) {
    let sum = 0
    for (let j = i; j < i + integer; j++) {
      sum += array[j];
    }
    averages.push(sum/integer);
  }
  return averages;
}

const slidingwindow = (array, integer) => {
  let averages = [];
  let windowStart = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (i >= integer-1) {
      averages.push(sum/integer);
      sum -= array[windowStart];
      windowStart++;
    }
  }
  return averages;
}

console.log(slidingwindow([1,2,3,4,5], 2));

// find the average of all contiguous subarrays of size k in the given array
// given array = [1,2,3,4,5], and k = 3
// contiguous subarrays of size 3 = [1,2,3], [2,3,4], [3,4,5]
// result = [2, 3, 4];