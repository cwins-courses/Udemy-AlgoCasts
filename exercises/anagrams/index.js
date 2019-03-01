// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleaner(stringA) === cleaner(stringB);
}

function cleaner(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const objA = {};
//     const objB = {};
//     for (let char of stringA.toLowerCase().replace(/[^\w]/g, "")) {
//       if (!objA[char]) {
//         objA[char] = 1;
//       } else {
//         objA[char]++;
//       }
//     }
//     for (let char of stringB.toLowerCase().replace(/[^\w]/g, "")) {
//       if (!objB[char]) {
//         objB[char] = 1;
//       } else {
//         objB[char]++;
//       }
//     }
//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//       return false;
//     }
//     for (let key in objA) {
//       if (objA[key] !== objB[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

// function anagrams(stringA, stringB) {
//     const objA = objMapper(stringA);
//     const objB = objMapper(stringB);

//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//       return false;
//     }
//     for (let key in objA) {
//       if (objA[key] !== objB[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function objMapper(str) {
//     const obj = {};
//     for (let char of str.toLowerCase().replace(/[^\w]/g, "")) {
//       if (!obj[char]) {
//         obj[char] = 1;
//       } else {
//         obj[char]++;
//       }
//     }
//     return obj;
//   }
