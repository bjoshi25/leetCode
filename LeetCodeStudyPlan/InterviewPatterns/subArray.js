let subArrayNaive = (array, k) => {
  let averages = [];

  for (let i = 0; i <= array.length - k; i++) {
    let sum = 0;
    for (let j = i; j <= i+2; j++) {
      sum += array[j];
    }
    averages.push(sum/3);
  }
  return averages;
}

let subArraySlidingWindow = (array, k) => {
  let averages = [];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if (windowEnd >= k-1) {
      averages.push(windowSum/3);
      windowSum-= array[windowStart];
      windowStart++;
    }
  }
  return averages;
}

console.log(subArrayNaive([1,2,3,4,5], 3));
console.log(subArraySlidingWindow([1,2,3,4,5], 3));