import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompCheckin from '../screens/competitorBracket';
const { Navigator, Screen } = createStackNavigator();

export const CompetitorOverviewStack = () => (
    <Navigator>
      <Screen
        name='OverviewScreen'
        component={CompCheckin}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default CompetitorOverviewStack;