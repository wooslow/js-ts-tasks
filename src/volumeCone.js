module.exports.volumeCone = function volumeCone(h, r) {
  if (typeof h !== 'number' || typeof r !== 'number') {
    throw new Error('error type');
  }

  const volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;

  return Math.round(volume * 100) / 100;
};
