// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// OICE
// OUTPUT - Boolean - to show whether given strings are isomorphic
// INPUT - Two equal length strings
// Constraints - Strings are equal in length
// Edge cases - none

// Create a store object to store each character in both strings
// traverse over the length of strings
  // check if the charater in string 's' exists in store object
    // if yes, check if corresponding 't' exists in store object
      // continue
    // else return false
// return true

var isIsomorphic = function(s, t) {
  let store = {};

  for (var i = 0; i < s.length; i++) {

    if (!Object.hasOwn(store, s[i])) {
      if (Object.values(store).includes(t[i])){
        return false;
      } else {
        store[s[i]] = t[i];
      }
    } else {
      if (t[i] !== store[s[i]]) {
        return false;
      }
    }

  } return true;
}