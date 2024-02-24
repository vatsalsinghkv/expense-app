import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { EXPENSES } from '../lib/constant/expenses';
import { ExpenseItem, ExpenseSummary } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const AllExpense = (props: Props) => {
  const totalExpense = EXPENSES.reduce(
    (acc, currExp) => acc + currExp.amount,
    0
  );

  const minDate = EXPENSES.reduce(
    (minExp, currExp) => (currExp.date < minExp.date ? currExp : minExp),
    EXPENSES[0]
  );
  const maxDate = EXPENSES.reduce(
    (maxExp, currExp) => (currExp.date > maxExp.date ? currExp : maxExp),
    EXPENSES[0]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseSummary
        total={totalExpense}
        startDate={minDate.date}
        endDate={maxDate.date}
      />
      <FlatList
        data={EXPENSES}
        renderItem={({ item }) => <ExpenseItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default AllExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0edf6',
    paddingHorizontal: 20,
    gap: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
