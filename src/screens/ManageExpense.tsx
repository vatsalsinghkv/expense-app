import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Input, Label } from '../components/ui';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons

import { useExpenses } from '../lib/hooks/use-expense';
import { RootStackParamList } from '../lib/utils/types';
import { Expense } from '../lib/models/expense';
import { GlobalStyles } from '../styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Manage'>;

const ManageExpense = ({ route, navigation }: Props) => {
  const { expenses, add, edit, remove } = useExpenses();

  const expense = expenses.find((e) => e.id === route.params?.id);
  const isEditing = !!expense;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? expense.description : 'New Expense',
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
        <Text style={styles.title}>{isEditing ? 'edit' : 'add'} expense</Text>

        <Input
          placeholder='Price'
          icon='attach-money'
          keyboardType='numeric'
          value={amount}
          onChangeText={setAmount}
        />

        <Input
          placeholder='Description'
          icon='notes'
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.inputContainer}>
          <MaterialIcons color='#64748b' name='date-range' size={24} />
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChangeDate}
          />
        </View>
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
          color='default'
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
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#64748b',
    marginVertical: 10,
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GlobalStyles.colors.bg,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
