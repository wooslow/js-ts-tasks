module.exports.payments = function payments(TestUtils) {
  return function (income, debts) {
    let sumAllIncomeProperties = TestUtils.sumAllObjectProperties.bind(income);
    let sumAllDebtsProperties = TestUtils.sumAllObjectProperties.bind(debts);

    return sumAllIncomeProperties() - sumAllDebtsProperties();
  }
};