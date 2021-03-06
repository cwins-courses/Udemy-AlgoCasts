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

// recursive solution

function steps(n, row = 0, stair = "") {
  if (n == row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;

// My initial solution

// function steps(n) {
//     const hash = "#";
//     const space = " ";
//     for (let i = 1; i <= n; i++) {
//       let result = "";
//       result = hash.repeat(i) + space.repeat(n - i);
//       console.log(result);
//     }
//   }
