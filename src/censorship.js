module.exports.censorship = function censorship(forbidden) {
  return function (str) {
    forbidden.forEach(word => {
      const regex = new RegExp(word, 'gi');
      str = str.replace(regex, '*'.repeat(word.length));
    });

    return str;
  };
};
