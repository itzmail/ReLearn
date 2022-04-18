import React from 'react';
import { View, Text } from 'react-native';
import { UserContext } from './src/UserContext';

export default () => {
  return (
    <UserContext.Provider value="Halo from context">
      <View>
        <Text>Halo React Context</Text>
      </View>
    </UserContext.Provider>
  )
}
