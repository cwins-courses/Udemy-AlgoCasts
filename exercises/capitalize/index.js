// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capd = "";
  for (let char in str) {
    // console.log(str[char])
    if (str[char - 1] === " " || char == 0) {
      capd += str[char].toUpperCase();
    } else capd += str[char];
  }
  return capd;
}

module.exports = capitalize;

// function capitalize(str) {
//     let arr = [];
//     for (let word of str.split(" ")) {
//       arr.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return arr.join(" ");
//   }
