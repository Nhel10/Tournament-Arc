/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/competitorBracket';

const { Navigator, Screen } = createStackNavigator();

export const SearchStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#D33F49',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Search'
      component={Search}
      options={{ 
        title: 'Search', 
        headerTitleAlign: 'center',
        }}
    />
  </Navigator>
);

export default SearchStack;