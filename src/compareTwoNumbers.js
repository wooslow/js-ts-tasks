module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new Error('type error');
  }

  if (firstNumber > secondNumber) {
    return '>';
  } else if (firstNumber < secondNumber) {
    return '<';
  } else {
    return '=';
  }
};