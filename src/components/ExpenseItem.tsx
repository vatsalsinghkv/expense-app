import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React from 'react';
import { timeSince } from '../lib/utils/helper';
import { Expense } from '../lib/models/expense';

type Props = TouchableOpacityProps & Expense;

const ExpenseItem = ({ description, amount, date, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.expense} {...props}>
      <Text style={styles.expenseText}>{description}</Text>
      <View style={{ gap: 5 }}>
        <Text style={styles.expensePrice}>₹{amount.toFixed(2)}</Text>
        <Text style={styles.expenseDate}>{timeSince(date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expense: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  expenseText: {
    fontSize: 18,
    color: '#334155',
    fontWeight: '500',
  },
  expensePrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  expenseDate: {
    fontSize: 15,
    color: '#475569',
  },
});
