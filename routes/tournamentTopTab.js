import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CurrentEventStack from './currentEventStack';
import MyEventStack from './myEventStack';
import CreateEventStack from './createEventStack';
import PastEventStack from './pastEventStack';

const Tab = createMaterialTopTabNavigator();

export const TournamentTopTab = () => (
    
    <Tab.Navigator
        initialRouteName="Create Events"
        activeColor="#fff"
        labelStyle={{ fontSize: 12 }}
    >
        <Tab.Screen name="Current Events" 
            component={CurrentEventStack} 
        />
        <Tab.Screen name="My Events" 
            component={MyEventStack} 
        />
        <Tab.Screen name="Create Event" 
            component={CreateEventStack} 
        />
        <Tab.Screen name="Past Events" 
            component={PastEventStack} 
        />
    </Tab.Navigator>
        
    );
export default TournamentTopTab;