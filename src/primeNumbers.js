module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return function (start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  };
};