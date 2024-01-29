import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Home, AllExpense, AddExpense } from './src/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from './src/styles';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const ExpensesOverview = () => (
  <Tab.Navigator
    initialRouteName='Home'
    activeColor='#f0edf6'
    inactiveColor='#f0edf6'
    barStyle={{ backgroundColor: '#694fad' }}
  >
    <Tab.Screen
      name='Overview'
      component={Home}
      options={{
        tabBarIcon({ color, focused }) {
          return (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? GlobalStyles.colors.primary200 : '#f0edf6'}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name='Expenses'
      component={AllExpense}
      options={{
        tabBarIcon({ color, focused }) {
          return (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={24}
              color={focused ? GlobalStyles.colors.primary200 : '#f0edf6'}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary200,
              },

              headerTintColor: '#fff',
            }}
          >
            <Stack.Screen name='ExpensesScreen' component={ExpensesOverview} />
            <Stack.Screen name='ManageScreen' component={AddExpense} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
