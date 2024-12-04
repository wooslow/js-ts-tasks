module.exports.formatAddress = function formatAddress() {
  return function (address) {
    const {
      street = '',
      house = '',
      apartment = '',
      city = '',
      postalCode = '',
      country = ''
    } = address;
    return `${street}, ${house}, ${apartment}, ${city}, ${postalCode}, ${country}`;
  };
};
