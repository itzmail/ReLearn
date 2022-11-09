import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { requestUserPermission, NotificationListener } from './src/utils/pushnotification_helper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  })

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Push Notification tester</Text>
    </View>
  )
}

export default App;