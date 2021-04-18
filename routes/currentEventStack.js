import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentEvent from '../screens/currentEventScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createStackNavigator();

export const CurrentEventStack = ({navigation}) => (
    <Navigator>
      <Screen
        name='Current Event'
        component={CurrentEvent}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default CurrentEventStack;