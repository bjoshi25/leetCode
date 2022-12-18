// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// OICE
// OUTPUt - An array of integers with number of days from ith day to reach a higher temp
// INPUT - Daily temperatures
// Constraints - none
// Edge Cases - if no higher temp exists in the next days, return 0 for that ith day.

// initialize a storage array
// loop over the given array
  // for ith element, iterate over remaining elements of the array
  // if higher temp is found
    // calculate no. of day from ith day to next higher temp
    // push to store
  // push 0
// return store

let dailyTemperaturesNaive = (temperatures) => {
  let store = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (j = i ; j < temperatures.length; j++) {
      if (j === temperatures.length - 1) {
        store.push(0);
        break;
      }
      if (temperatures[j] > temperatures[i]) {
        store.push(j-i);
        break;
      }
    }
  }
  return store;
};

// declare a windowStart and windowStart
// while temperature at windowStart is not greater than temp at windowStart
  // grow the window


let dailyTemperatures = (temperatures) => {
  let store = [];
  let windowEnd = 0;
  for (let windowStart = 0; windowStart < temperatures.length; windowStart++) {
    windowEnd++;
    while (temperatures[windowEnd]> temperatures[windowStart]) {
      store.push(windowEnd - windowStart);
    }
  }
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));