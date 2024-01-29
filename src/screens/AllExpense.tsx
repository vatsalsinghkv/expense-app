import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const AllExpense = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>AllExpense</Text>
    </View>
  );
};

export default AllExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
