// fuzzy finder

// 1.
function fuzzy_match(str, pattern) {
  str = str.toLowerCase();
  pattern = pattern.split(""); // ["s", "o", "p", "h", "i", "e"]
  pattern = pattern.join(".*"); // s.*o.*p.*h.*i.*e
  pattern = new RegExp(pattern); // /s.*o.*p.*h.*i.*e/
  return pattern.test(str); // true or false
}

let result = fuzzy_match("masha", "ma");
console.log(result);

result = fuzzy_match("MASHA", "msha");
console.log(result);

function fuzzy_match(str, pattern) {
  str = str.toLowerCase();
  pattern = pattern.split("").join("*");
  pattern = new RegExp(pattern);
  return pattern.text();
}
