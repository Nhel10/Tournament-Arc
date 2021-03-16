/*--- 
  SUMMARY:
  This file creates the drawer Navigation in the Application, each screen represents a 
  stack navigation route of pages for the application to open. 
---*/

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './bottomTab';
import TopTabNavigator from './tournamentTopTab';

/* --- Import all the stack routes file location --- */
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import RegistrationStack from './registrationStack';
import ProfileStack from './profileStack';
import MyTournamentStack from './myTournamentStack';
import SettingStack from './settingStack';

import FollowStack from './followingStack';
import SearchStack from './searchStack';
import CreateTourneyStack from './createTourneyStack';
import ChatStack from './chatStack';


import { DrawerContent } from './drawerContent';

const { Navigator, Screen } = createDrawerNavigator(); // Creates Stack navigation 

/*---
  This function represents all the stack navigation routes to be displayed  
  in the drawer navigation window
---*/
export const RootDrawerNavigator = () => (
  <Navigator 
  drawerContent = {props => <DrawerContent {... props} />}
  initialRouteName='Home'>
    <Screen
      name='Home'
      component={TabNavigator}
    />
    <Screen
      name='Profile'
      component={ProfileStack}
    />
    <Screen
      name='My Tournament'
      component={TopTabNavigator}
    />
     <Screen
      name='Log In'
      component={RegistrationStack}
    />
    <Screen
      name='Setting'
      component={SettingStack}
    />
     <Screen
      name='About'
      component={AboutStack}
    />
    
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;