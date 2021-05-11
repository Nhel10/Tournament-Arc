/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../screens/addFriend';


const { Navigator, Screen } = createStackNavigator();

export const ChatStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
            backgroundColor: "#304857",
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Chat'
      component={Chat}
      options={{ 
        title: 'Friends', 
        headerTitleAlign: 'center',
        }}
    />
  </Navigator>
);

export default ChatStack;