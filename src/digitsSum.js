module.exports.digitsSum = function digitsSum(n) {
  if (typeof n !== 'number' || n < -1000000 || n > 1000000) {
    throw new Error('number must be -1000000 to 1000000');
  }

  const str = Math.abs(n).toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return sum;
};
