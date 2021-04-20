import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyEvent from '../screens/myEventScreen';
import guilty from '../screens/guiltyGearEvent';
import blazeblue from '../screens/blazeBlueEvent';
import Icon from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createStackNavigator();

export const MyEventStack = ({navigation}) => (
    <Navigator
      headerMode='screen'
      screenOptions={{
      headerStyle: {
        backgroundColor: '#304857',
      },
      headerTintColor: '#fff',
      height: 60
    }}
      initialRouteName = 'My Events'
      >
      <Screen
        name='My Events'
        component={MyEvent}
        options={{ 
          headerShown: false
          }}
      />
      <Screen
        name='Guilty Gear'
        component={guilty}
        
      />
      <Screen
        name='Blazeblue'
        component={blazeblue}
        
      />
    </Navigator>
  );
  
  export default MyEventStack;