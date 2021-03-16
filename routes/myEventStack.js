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
           headerLeft: () => (
            <Icon.Button name = "ios-menu" size={25}
            backgroundColor="#304857" onPress={() => navigation.openDrawer()}
            ></Icon.Button>
           )
          }}
      />
  
  
    </Navigator>
  );
  
  export default MyEventStack;