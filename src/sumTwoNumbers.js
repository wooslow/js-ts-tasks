module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const num1 = Number(firstNumber.toString().replace(/\s+/g, '').trim());
  const num2 = Number(secondNumber.toString().replace(/\s+/g, '').trim());

  return num1 + num2;
};
