/*--- 
  SUMMARY:
  This file creates the stack navigation for navigating the Settings Screen

  SCREENS:
  - settings.js
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/settings';
import Registration from '../screens/registration';
import Inputs from '../screens/input';
import Icon from 'react-native-vector-icons/Ionicons';


const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = ({navigation}) => (
<Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#304857',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Settings'
      component={Settings}
      options={{ 
        title: 'Settings', 
        headerTitleAlign: 'center',
         headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
        }}
    />
{/* 
    <Screen
      name='Inputs'
      component={Inputs}
      options={{ 
        title: 'Log In', 
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
      }}
    />  

    <Screen
      name='Register'
      component={Registration}
      options={{ 
        title: 'Register',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
       }}
    /> */}

  </Navigator>
);

export default SettingsStack;