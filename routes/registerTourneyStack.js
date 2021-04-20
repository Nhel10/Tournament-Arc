import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/registerTourneyScreen';

const { Navigator, Screen } = createStackNavigator();

export const RegisterTourneyStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3C896D',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='RegisterTourney'
      component={Register}
      options={{ 
        title: 'Create A Tournament', 
        headerTitleAlign: 'center',
        }}
    />
  </Navigator>
);

export default RegisterTourneyStack ;