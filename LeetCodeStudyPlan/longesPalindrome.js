// Given a string s which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function(s) {
  let storage = {};

  for (var i = 0; i < s.length; i++) {
    if (storage[s[i]] === undefined) {
      storage[s[i]] = 1;
    } else {
      storage[s[i]]++
    }
  }

  let countsArray = Object.values(storage);
  let palindromeLength = 0;
  for (let i = 0; i < countsArray.length; i++) {
    if (countsArray[i] % 2 === 0) {
      palindromeLength += countsArray[i];
    } else {
      palindromeLength += countsArray[i] - 1;
    }
  }

  if (palindromeLength < s.length) {
    palindromeLength+= 1;
  }

  return palindromeLength;
};