import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const AddExpense = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>AddExpense</Text>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
