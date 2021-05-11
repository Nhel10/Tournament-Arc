import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentEvent from '../screens/currentEventScreen';
import CurrentEvents from '../screens/currentEventsScreen';
import CurrentTournament from '../screens/tourneyArcScreen';
import CurrentBracket from '../screens/displayBracket';
import register from '../screens/registerTourneyScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createStackNavigator();

export const CurrentEventStack = ({navigation}) => (
    <Navigator
      headerMode='screen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#304857',
        },
        headerTintColor: '#fff',
        height: 60
      }}
      initialRouteName = 'Current Events'
    >
        <Screen
            name='Current Events'
            component={CurrentEvents}
        />

      <Screen
        name='Current Event'
        component={CurrentEvent}
        options={{ 
          headerShown: false
          }}
      />

        <Screen
            name='Current Tournament'
            component={CurrentTournament}
            options={{
                headerShown: false
            }}
        />

        <Screen
            name='Current Bracket'
            component={CurrentBracket}
            options={{
                headerShown: false
            }}
        />
      <Screen
        name='Register'
        component={register}
      />
  

    </Navigator>
  );
  
  export default CurrentEventStack;