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
           headerLeft: () => (
            <Icon.Button name = "ios-menu" size={25}
            backgroundColor="#304857" onPress={() => navigation.openDrawer()}
            ></Icon.Button>
           )
          }}
      />
  
  
    </Navigator>
  );
  
  export default PastEventStack;