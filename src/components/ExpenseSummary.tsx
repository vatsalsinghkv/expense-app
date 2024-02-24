import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { dateFormatter } from '../lib/utils/helper';

type Props = {
  total: number;
  startDate: Date;
  endDate: Date;
};

const ExpenseSummary = ({ total, startDate, endDate }: Props) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#f87171', '#c084fc', '#60a5fa']}
      style={styles.container}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={{ gap: 14 }}>
        <Text style={styles.subHeading}>Total Expense</Text>
        <Text style={styles.priceText}>₹{total.toLocaleString()}</Text>
        <Text style={styles.subText}>
          {dateFormatter(startDate)} - {dateFormatter(endDate)}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 50,
  },
  priceText: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
