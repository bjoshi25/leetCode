// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// OICE
// OUTPUT - Boolean whether s is a subsequence of t
// INPUT - two strings
// Constraints - the order of occurence should not be disturbed
// edge cases - zero length string?

// traverse over the smaller string
  // start two pointers to check whether each character exists in the string 't'
  // check each character from start and end of 't'
    // if there is a match, reset countes and continue
    // else return false
  // return true

  var isSubsequence = function(s, t) {

    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
      if (t[tPointer] === s[sPointer]) {
        sPointer++;
      }
      tPointer++
    }

    if (sPointer === s.length ) {
      return true
    } else return false
  };

