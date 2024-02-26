import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Home, AllExpense, ManageExpense } from './src/screens';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { GlobalStyles } from './src/styles';
import React from 'react';
import { TabBarBtn } from './src/components';
import { type RootStackParamList } from './src/lib/types/navigator';
import ExpensesProvider from './src/lib/store/ExpenseContext';

const Tab = createMaterialBottomTabNavigator();

const ExpensesOverview = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => (
  <Tab.Navigator
    initialRouteName='AllExpenses'
    activeColor={GlobalStyles.colors.primary200}
    inactiveColor={GlobalStyles.colors.primary200}
    barStyle={{ backgroundColor: '#fff' }}
  >
    <Tab.Screen
      name='AllExpenses'
      component={Home}
      options={{
        tabBarIcon({ color, focused }) {
          return (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={GlobalStyles.colors.primary200}
            />
          );
        },
      }}
    />

    {/* Plus button */}
    <Tab.Screen
      name='Add'
      component={() => null} // Use a dummy component or null here
      options={{
        tabBarIcon: () => (
          <TabBarBtn>
            <Ionicons name='md-add' size={36} color='#fff' />
          </TabBarBtn>
        ),
        tabBarLabel: '', // Hide label for the plus button
      }}
      listeners={() => ({
        tabPress(e) {
          e.preventDefault();
          console.log('tabPress');
          navigation.navigate('Manage'); // Navigate to the AddExpense screen
        },
      })}
    />

    <Tab.Screen
      name='Expenses'
      component={() => <AllExpense navigation={navigation} />}
      options={{
        tabBarIcon({ color, focused }) {
          return (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={24}
              color={GlobalStyles.colors.primary200}
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
          <ExpensesProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='Home' component={ExpensesOverview} />
              <Stack.Screen
                name='Manage'
                options={{
                  presentation: 'modal',
                  headerBackTitle: 'Back',
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary200,
                  },
                  headerTintColor: '#fff',
                }}
                component={ManageExpense}
              />
            </Stack.Navigator>
          </ExpensesProvider>
        </PaperProvider>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
