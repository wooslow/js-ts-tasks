module.exports.evalExpr = function evalExpr(k) {
  if (typeof k !== 'number') {
    throw new Error('type error');
  }

  return 4 * (2 * k - 1);
};