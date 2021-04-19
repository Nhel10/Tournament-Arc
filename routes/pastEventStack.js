import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PastEvent from '../screens/pastEventScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createStackNavigator();

export const PastEventStack = ({navigation}) => (
    <Navigator>
      <Screen
        name='Past Events'
        component={PastEvent}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default PastEventStack;