// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.f

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
// OUTPUT - Boolean flag to show whether input string is isomorphic or not
// INPUT - two strings
// Constraints - string is not empty
// Edge case - none

// create a store to map the element of string 's' and 't'
// iterate over strings 's' and 't' - one counter enough cuz equal length strings
  // check if s[i] exists in store
    // if yes,
      // check if value corresponding to s[i], in store, matches t[i]
        // if not, return false
      // if yes, conitnue iteration
    // if not, add the key-value pair to store
// return true;

let isIsomorphic = (s, t) => {
  let store = {};
  for (let i = 0; i < s.length; i++) {
    if (store[s[i]]) {
      if (store[s[i]] === t[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      let existingValues = Object.values(store);
      if (existingValues.includes(t[i])) return false;
      else store[s[i]] = t[i];
    }
  }
  return true;
};

let s = "badc";
let t = "baba";
let ans = isIsomorphic(s,t)
console.log('ans', ans);