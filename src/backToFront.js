module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (typeof str !== 'string' || typeof symbolsCount !== 'number') {
    throw new Error('type error');
  }

  if (str.length < symbolsCount) {
    return str;
  }

  const front = str.slice(-symbolsCount);
  const back = str.slice(-symbolsCount);
  return front + str + back;
};