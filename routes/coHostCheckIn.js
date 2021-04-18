import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInScreen from '../screens/coHostCheckInScreen';
const { Navigator, Screen } = createStackNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

export const CoHostCheckInStack = () => (
    <Navigator>
      
      <Screen
        name='Check In'
        component={CheckInScreen }
        options={{ 
          headerShown: false
          
          }}
      />
  
  
    </Navigator>
  );
  
  export default CoHostCheckInStack  ;