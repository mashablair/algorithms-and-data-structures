// reverse a string
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverse("masha");

// 2nd solution for reverse a string
function reverse2(str) {
  let reversed = "";

  // better syntax for for loops (ES6)
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

reverse2("sophie");

// 3rd solution for reverse a string
function reverse3(str) {
  console.log("hello");
  debugger;
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

reverse3("elijah");
