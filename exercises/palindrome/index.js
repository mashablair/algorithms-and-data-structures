// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let newStr = "";
//   for (let char of str) {
//     newStr = char + newStr;
//   }
//   return newStr === str;
// }

// this solution is not efficient b/c it checks values twice,
// but it uses .every ES6 helper
function palindrom(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
