import React, { useState, useMemo, useReducer } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalContext } from './src/context';

import HomeScreen from './src/homeScreen';
import AboutScreen from './src/aboutScreen';
import CounterScreen from './src/counterScreen';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      state;
  }
}

export default () => {
  const [user, setUser] = useState('Hi You there!');
  const [count, dispatch] = useReducer(reducer, 0)

  const provider = useMemo(() => (
    { value: user, setValue: setUser, count, dispatch } // cara pertama
  ), [user, setUser, count, dispatch])

  const Stack = createNativeStackNavigator();

  return (
    <GlobalContext.Provider value={provider}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen name="ABOUT" component={AboutScreen} />
          <Stack.Screen name="COUNTER" component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  )
}
