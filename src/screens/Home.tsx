import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../styles';

type Props = {};

// Recent expenses

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
