/*--- 
  SUMMARY:
  This file creates the stack navigation for navigating the About Screen

  SCREENS:
  - about.js
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Registration from '../screens/registration';
import Inputs from '../screens/input';
import Icon from 'react-native-vector-icons/Ionicons';


const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({navigation}) => (
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
      name='About'
      component={About}
      options={{ 
        title: 'About Tournament Arc', 
        headerTitleAlign: 'center',
         headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
        }}
    />

    <Screen
      name='Inputs'
      component={Inputs}
      options={{ 
        title: 'Create Tournament Arc', 
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
    />

  </Navigator>
);

export default AboutStack;