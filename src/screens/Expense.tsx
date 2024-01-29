import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Expense = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Expense</Text>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
