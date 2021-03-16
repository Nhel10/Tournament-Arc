import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

/* --- Import all the stack routes file location --- */
import HomeStack from './homeStack';
import FollowStack from './followingStack';
import SearchStack from './searchStack';
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
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Following"
      component={FollowStack}
      options={{
        tabBarLabel: 'Following',
        tabBarColor: '#ADB2D3',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-grid" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#D33F49',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStack}
      options={{
        tabBarLabel: 'Chat',
        tabBarColor: '#BE7C4D',
        tabBarIcon: ({ color }) => (
          <Icon name="chatbubble-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);


export default MyTabs;