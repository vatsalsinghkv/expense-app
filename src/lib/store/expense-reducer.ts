import { Expense } from '../types/expense';

// Define actions
enum Actions {
  ADD = 'ADD',
  EDIT = 'EDIT',
  REMOVE = 'REMOVE',
}

// Define action types
type ExpensesAction =
  | { type: Actions.ADD; payload: Expense }
  | { type: Actions.EDIT; payload: Expense }
  | { type: Actions.REMOVE; payload: string };

// Define reducer function
const expenseReducer = (
  expenses: Expense[],
  action: ExpensesAction
): Expense[] => {
  switch (action.type) {
    case Actions.ADD:
      return [action.payload, ...expenses];

    case Actions.EDIT:
      return expenses.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload }
          : expense
      );

    case Actions.REMOVE:
      return expenses.filter((expense) => expense.id !== action.payload);
    default:
      return expenses;
  }
};

export { expenseReducer as default, Actions as ExpenseActions };
