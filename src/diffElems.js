/**
 * Counts the number of different elements in an array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {number} - The count of distinct elements in the array.
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size;
};
