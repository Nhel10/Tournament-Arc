import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentEvent from '../screens/currentEventScreen';
import register from '../screens/registerTourneyScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createStackNavigator();

export const CurrentEventStack = ({navigation}) => (
    <Navigator
      headerMode='screen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#304857',
        },
        headerTintColor: '#fff',
        height: 60
      }}
      initialRouteName = 'Current Event'
    >
      <Screen
        name='Current Event'
        component={CurrentEvent}
        options={{ 
          headerShown: false
          }}
      />

      <Screen
        name='Register'
        component={register}
      />
  
  
    </Navigator>
  );
  
  export default CurrentEventStack;