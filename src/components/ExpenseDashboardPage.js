import React from 'react';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
    <IncomeList />
  </div>
);

export default ExpenseDashboardPage;
