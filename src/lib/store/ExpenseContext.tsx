import React, { createContext, useReducer } from 'react';
import { Expense } from '../types/expense';
import expenseReducer, { ExpenseActions } from './expense-reducer';

// Initial expenses data
export const EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: "Laptop's battery fixed",
    amount: 500,
    date: new Date('2024-01-26'),
  },
  {
    id: 'e2',
    description: "Flat's security",
    amount: 500,
    date: new Date('2024-01-28'),
  },
  {
    id: 'e3',
    description: 'A Cycle',
    amount: 5000,
    date: new Date('2024-02-03'),
  },
  {
    id: 'e4',
    description: "Flat's rent",
    amount: 2750,
    date: new Date('2024-02-01'),
  },
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
