module.exports.palindrome = function palindrome(TestUtils) {
  return function (str) {
    let refsstr = {
      str: str.replaceAll(/[^0-9A-Za-z]/g, '').toLowerCase(),
    };

    let isPalindrome = TestUtils.isPalindrome.bind(refsstr);

    return isPalindrome();
  }
};