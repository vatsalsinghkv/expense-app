import React, { createContext, useReducer } from 'react';

import expenseReducer, { ExpenseActions } from './expense-reducer';
import { Expense } from '../models/expense';

// Initial expenses data
const EXPENSES: Expense[] = [
  new Expense('e1', "Laptop's battery fixed", 500, new Date('2024-01-26')),
  new Expense('e2', "Flat's security", 500, new Date('2024-01-28')),
  new Expense('e3', 'A Cycle', 5000, new Date('2024-02-03')),
  new Expense('e4', "Flat's rent", 2750, new Date('2024-02-01')),
];

// Create context with initial state
const initialExpenses: Expense[] = EXPENSES;

export const ExpensesContext = createContext({
  expenses: initialExpenses,
  add(expense: Expense) {},
  edit(expense: Expense) {},
  remove(id: string) {},
});

// ExpensesProvider component
const ExpensesProvider = ({ children }: { children: React.ReactNode }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, initialExpenses);

  const add = (expense: Expense) => {
    dispatch({ type: ExpenseActions.ADD, payload: expense });
  };

  const edit = (expense: Expense) => {
    dispatch({ type: ExpenseActions.EDIT, payload: expense });
  };

  const remove = (id: string) => {
    dispatch({ type: ExpenseActions.REMOVE, payload: id });
  };

  return (
    <ExpensesContext.Provider value={{ expenses, add, edit, remove }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
