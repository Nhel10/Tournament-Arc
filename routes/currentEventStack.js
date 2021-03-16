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
           headerLeft: () => (
            <Icon.Button name = "ios-menu" size={25}
            backgroundColor="#304857" onPress={() => navigation.openDrawer()}
            ></Icon.Button>
           )
          }}
      />
  
  
    </Navigator>
  );
  
  export default CurrentEventStack;