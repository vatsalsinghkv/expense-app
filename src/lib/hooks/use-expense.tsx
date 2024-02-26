import { useContext } from 'react';
import { ExpensesContext } from '../store/ExpenseContext';

// Custom hook to access context
export const useExpenses = () => {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpensesProvider');
  }
  return context;
};
