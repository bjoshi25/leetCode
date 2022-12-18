// Given a string, find the length of the longest
// substring with 'K' distinct characters.

// Example
// String = 'acccpbbebi'
// K = 3
// Result = 6, substring is 'cccpbb'

// OICE
// OUTPUT - Length of longest substring with K distinct characters
// INPUT - String and integer K;
// Constraints - none
// Edge cases - all characters are distinct - return the length of the string;

// Initiate a windowStart, windowEnd, MaxlengthSoFar, frequency tracker
// loop over the given string
  // if the current character does not exist in tracker
    // add it
  // else
    // increment frequency
  // while the number of keys in tracker is more than K
    // decrement the frequency of current character
    // check if the freq of current character is 0
      // if yes, delete the character
  // calculate max length of current substring
// return MaxLengthSoFar;

let longestSubStringWithKDistinctCharacters = (string, k) => {

  let windowStart = 0,
    maxLengthSoFar = 0,
    frequencyStore = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    let currentCharacter = string[windowEnd];
    if (!frequencyStore[currentCharacter]) {
      frequencyStore[currentCharacter] = 1;
    } else {
      frequencyStore[currentCharacter]++;
    }

    while (Object.keys(frequencyStore).length > k) {
      let charAtWindowStart = string[windowStart];
      frequencyStore[charAtWindowStart]--;
      if (frequencyStore[charAtWindowStart] === 0) {
        delete frequencyStore[charAtWindowStart];
      }
      windowStart++;
    }

    maxLengthSoFar = Math.max(maxLengthSoFar, windowEnd - windowStart + 1);
  }
  return maxLengthSoFar;
}

console.log(longestSubStringWithKDistinctCharacters('acccpbbebi', 3));