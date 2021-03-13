/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Create from '../screens/createEvent';

const { Navigator, Screen } = createStackNavigator();

export const CreateEventStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3C896D',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Create Event'
      component={Create}
      options={{ 
        title: 'Create an Event', 
        headerTitleAlign: 'center',
        }}
    />
  </Navigator>
);

export default CreateEventStack;