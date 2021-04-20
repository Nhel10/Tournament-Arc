import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompOverviewStack from "./competitorOverviewStack";
import CompCheckinStack from "./competitorCheckinStack";
import checkListStack from "./checkInListStack";
import unregistor from "./competitorUnregistorStack";

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
        <Tab.Screen name="List" 
            component={checkListStack} 
        />
        <Tab.Screen name = "Unregistor"
            component={unregistor}
        />

    </Tab.Navigator>
        
    );
export default coHostInterfaceStack ;