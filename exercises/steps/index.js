// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let spaces = "";
  for (let i = 1; i < n; i++) {
    spaces += " ";
  }
  let string = "";

  for (let i = 1; i <= n; i++) {
    let result = "";
    string += "#";
    result = string + spaces;
    console.log(result);
    spaces = spaces.slice(0, -1);
  }
}

module.exports = steps;
