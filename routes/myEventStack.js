import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyEvent from '../screens/myEventScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createStackNavigator();

export const MyEventStack = ({navigation}) => (
    <Navigator>
      <Screen
        name='My Events'
        component={MyEvent}
        options={{ 
          headerShown: false
          }}
      />
    </Navigator>
  );
  
  export default MyEventStack;