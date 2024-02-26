import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ExpenseItem, ExpenseSummary } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '../lib/types/navigator';
import { useExpenses } from '../lib/hooks/use-expense';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
};

const AllExpense = ({ navigation }: Props) => {
  const { expenses } = useExpenses();

  const totalExpense = expenses.reduce(
    (acc, currExp) => acc + currExp.amount,
    0
  );

  const minDate = expenses.reduce(
    (minExp, currExp) => (currExp.date < minExp.date ? currExp : minExp),
    expenses[0]
  );
  const maxDate = expenses.reduce(
    (maxExp, currExp) => (currExp.date > maxExp.date ? currExp : maxExp),
    expenses[0]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseSummary
        total={totalExpense}
        startDate={minDate.date}
        endDate={maxDate.date}
      />
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <ExpenseItem
            {...item}
            onPress={() => {
              navigation.navigate('Manage', { id: item.id });
            }}
          />
        )}
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
