/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError('не список'));
    }

    for (const promise of promisesArray) {
      Promise.resolve(promise)
          .then(resolve)
          .catch(reject);
    }
  });
};
