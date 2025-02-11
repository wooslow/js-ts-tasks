/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  if (typeof word === 'number') {
    const digits = new Set(String(word));
    return digits.size === 10;
  }

  if (typeof word === 'string') {
    const letters = new Set(word.toLowerCase().replace(/[^a-z]/g, ''));
    return letters.size === 26;
  }

  return false;
};
