module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function (address) {
    const formattedAddress = order.map(key => address[key] || '').join(', ');
    return formattedAddress;
  };
};
