export default (
) => {
  return incomes
      .map((income) => income.amount)
      .reduce((sum, value) => sum + value, 0);
};
