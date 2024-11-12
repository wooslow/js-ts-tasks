module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  if (typeof firstSalary !== 'number' || typeof secondSalary !== 'number' || typeof thirdSalary !== 'number') {
    throw new Error('type errpr');
  }

  const maxSalary = Math.max(firstSalary, secondSalary, thirdSalary);
  const minSalary = Math.min(firstSalary, secondSalary, thirdSalary);

  return maxSalary - minSalary;
};