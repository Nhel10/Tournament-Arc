import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import CompetitorCheckInStack from './competitorCheckInStack';
import CompetitorBracketStack from './competitorBracketStack';

const Tab = createMaterialTopTabNavigator();


export const CompetitorTopTab = () => (
    <Tab.Navigator
        initialRouteName="Competitor"
        activeColor="#fff"
        labelStyle={{ fontSize: 12 }}
    >
        <Tab.Screen name="Check-In" 
            component={CompetitorCheckInStack} 
        />
        <Tab.Screen name="Brackets" 
            component={CompetitorBracketStack} 
        />
    </Tab.Navigator>
        
    );
export default CompetitorTopTab;

