import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompCheckin from '../screens/competitorCheckIn';
const { Navigator, Screen } = createStackNavigator();

export const CompetitorCheckinStack = () => (
    <Navigator>
      <Screen
        name='Competitor Check In'
        component={CompCheckin}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default CompetitorCheckinStack;