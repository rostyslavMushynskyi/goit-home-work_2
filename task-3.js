"use strict";
const findLongestWord = function (string) {
  const arrayString = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i].length > longestWord.length) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
