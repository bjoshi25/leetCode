// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// OICE
// OUTPUT - A boolean to flag whether string s is subsequence of t
// INPUT - two strings
// CONSTRAINTS - both strings are lowercase only
// EDGE CASE -  s is empty string;

// Two-pointer strategy

// declare two pointers - one each for s and t
// while s and t are not out of bound (< s.length and t.length resp)
  // check if s[i] === t[i]
    // if yes, increment both counters
  // else
    // increment t counter
// check if string has the same element at s and t counter (will be last element of string)
  // if yes, then return true
  // else, return false

  let isSubsequence = (s, t) => {
    let sCount = 0;
    let tCount = 0;

    while (sCount < s.length && tCount < t.length) {
      if (s[sCount] === t[tCount]) {
        sCount++;
        tCount++;
      } else {
        tCount++;
      }
    }

    if (sCount-1 === s.length) {
      return true;
    } else  {
      return false
    };
  };

  let s = "b";
  let t = "abc";

  console.log(isSubsequence(s,t))
