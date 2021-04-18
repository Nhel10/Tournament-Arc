import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import coHostOverviewStack from './coHostOverviewStack';
import coHostCheckInStack from './coHostCheckIn';
import coHostBracketStack from './coHostBracket';

const Tab = createMaterialTopTabNavigator();

export const coHostInterfaceStack = () => (
    
    <Tab.Navigator
        initialRouteName="Overview"
        activeColor="#fff"
        labelStyle={{ fontSize: 12 }}
    >
        <Tab.Screen name="Overview" 
            component={coHostOverviewStack} 
        />
        <Tab.Screen name="CheckIn" 
            component={coHostCheckInStack} 
        />
        <Tab.Screen name="Brackets" 
            component={coHostBracketStack} 
        />
    </Tab.Navigator>
        
    );
export default coHostInterfaceStack ;