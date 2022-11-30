// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// OICE
// OUTPUT - Maximum profit - a number >=0
// INPUT - Array of prices
// Constraints - you can only sell in the future, i.e. profit can only be calculated as P[i+n] - P[i].
// Edge Cases - No profit to be made, then return 0

// Declare a variable Profit to keep track of max profit
// loop over the priced Array
  // For each stock price, loop over the rest of the array
  // determine profit
  // update Profit if subsequent combination yields a bigger profit
// return Profit

let maxProfit = (prices) => {
  let profit = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - min);
    }
  }

  return profit;

}


