import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompOverviewStack from "./competitorOverviewStack";
import CompCheckinStack from "./competitorCheckinStack";

const Tab = createMaterialTopTabNavigator();

export const coHostInterfaceStack = () => (
    
    <Tab.Navigator
        initialRouteName="Overview"
        activeColor="#fff"
        labelStyle={{ fontSize: 12 }}
    >
        <Tab.Screen name="Overview" 
            component={CompOverviewStack} 
        />
        <Tab.Screen name="CheckIn" 
            component={CompCheckinStack} 
        />

    </Tab.Navigator>
        
    );
export default coHostInterfaceStack ;