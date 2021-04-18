import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OverviewScreen from '../screens/coHostOverviewScreen';
const { Navigator, Screen } = createStackNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

export const CoHostOverViewStack = () => (
    <Navigator>
      <Screen
        name='OverviewScreen'
        component={OverviewScreen}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default CoHostOverViewStack;