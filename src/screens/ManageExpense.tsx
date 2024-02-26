import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Input } from '../components/ui';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GlobalStyles } from '../styles';

import { useExpenses } from '../lib/hooks/use-expense';
import { RootStackParamList } from '../lib/utils/types';
import { Expense } from '../lib/models/expense';

type Props = NativeStackScreenProps<RootStackParamList, 'Manage'>;

const ManageExpense = ({ route, navigation }: Props) => {
  const { expenses, add, edit, remove } = useExpenses();

  const expense = expenses.find((e) => e.id === route.params?.id);
  const isEditing = !!expense;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing]);

  const [description, setDescription] = useState(expense?.description ?? '');
  const [amount, setAmount] = useState(expense?.amount?.toString() ?? '');
  const [date, setDate] = useState(expense?.date ?? new Date());

  const handleSaveExpense = () => {
    const newExpense = new Expense(
      expense?.id ?? Math.random().toString(),
      description,
      parseFloat(amount),
      date
    );

    if (isEditing && expense) {
      edit(newExpense);
    } else {
      add(newExpense);
    }

    console.log('New expense:', newExpense);
    navigation.goBack();
  };

  const handleDeleteExpense = () => {
    if (expense) {
      remove(expense.id);
      navigation.goBack();
    }
  };

  const onChangeDate = (_: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    if (currentDate instanceof Date) {
      setDate(currentDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20, gap: 16 }}>
        <Text>{expense?.id}</Text>
        <Input
          placeholder='Price'
          icon='cash'
          keyboardType='numeric'
          value={amount}
          onChangeText={setAmount}
        />

        <DateTimePicker
          testID='dateTimePicker'
          style={{ display: 'flex', width: '100%' }}
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChangeDate}
        />

        <Input
          placeholder='Description'
          icon='md-create'
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View
        style={{
          margin: 20,
          gap: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button
          title={isEditing ? 'Save' : 'Add'}
          onPress={handleSaveExpense}
        />
        {isEditing && (
          <Button
            color='destructive'
            title='Delete'
            onPress={handleDeleteExpense}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
