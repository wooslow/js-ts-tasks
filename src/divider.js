module.exports.divider = function divider(n, k) {
  if (typeof n !== 'number' || typeof k !== 'number') {
    throw new Error('type error');
  }
  if (k === 0) {
    throw new Error('division by zero');
  }

  const wholePart = Math.floor(n / k);
  const remainder = n % k;

  return `${wholePart} ${remainder}`;
};