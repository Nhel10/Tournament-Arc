import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


/* --- Import all the stack routes file location --- */
import HomeStack from './homeStack';
import FollowStack from './followingStack';
import SearchStack from './searchStack';
import CreateTourneyStack from './createTourneyStack';
import ChatStack from './chatStack';

const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => (

  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    labelStyle={{ fontSize: 12 }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#304857',
       
      }}
    />
    <Tab.Screen
      name="Following"
      component={FollowStack}
      options={{
        tabBarLabel: 'Following',
        tabBarColor: '#ADB2D3',
       
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#D33F49',
      
      }}
    />
    <Tab.Screen
      name="CreateTourney"
      component={CreateTourneyStack}
      options={{
        tabBarLabel: 'Tournament History',
        tabBarColor: '#3C896D',
        
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStack}
      options={{
        tabBarLabel: 'Chat',
        tabBarColor: '#BE7C4D',
        
      }}
    />
  </Tab.Navigator>
);


export default MyTabs;