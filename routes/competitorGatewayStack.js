import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  compInterface from './competitorInterfaceTab';
import GatewayScreen from '../screens/competitorGatewayScreen'
import Icon from 'react-native-vector-icons/Ionicons';


const { Navigator, Screen } = createStackNavigator();

export const competitorGatewayStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#304857',
      },
      headerTintColor: '#fff',
      height: 60
    }}
    initialRouteName = 'Co-Host Gateway Screen'
  >
    <Screen
      name='Co-Host Gateway Screen'
      component={GatewayScreen}
      options={{ 
        title: 'Select Tournament Bracket', 
        headerTitleAlign: 'center',
         headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
        }}
    />

    <Screen
        name = 'Competitor Interface'
        component = {compInterface}
       
    />


  </Navigator>
);

export default competitorGatewayStack ;