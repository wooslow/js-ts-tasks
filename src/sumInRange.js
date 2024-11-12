module.exports.sumInRange = function sumInRange(start, end) {
  const numStart = Number(start);
  const numEnd = Number(end);
  const first = Math.min(numStart, numEnd);
  const last = Math.max(numStart, numEnd);
  const n = last - first + 1;

  return (n * (first + last)) / 2;
};
