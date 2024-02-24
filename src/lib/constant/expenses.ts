export const EXPENSES: ExpenseType[] = [
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

export type ExpenseType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};
