// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // get length of string
//   const length = str.length;
//   let newStr = "";

//   for (let i = length - 1; i >= 0; i--) {
//     let lastChar = str.charAt(i);
//     newStr += lastChar;
//   }
//   return newStr;
// }

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverse("abcd");

module.exports = reverse;
