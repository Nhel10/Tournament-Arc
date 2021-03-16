import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../screens/settingScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const { Navigator, Screen } = createStackNavigator();

export const SettingStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#304857',
      },
      headerTintColor: '#fff',
      height: 60
    }}
  >
    <Screen
      name='Setting'
      component={Setting}
      options={{ 
        title: 'Setting Screen', 
        headerTitleAlign: 'center',
         headerLeft: () => (
          <Icon.Button name = "ios-menu" size={25}
          backgroundColor="#304857" onPress={() => navigation.openDrawer()}
          ></Icon.Button>
         )
        }}
    />


  </Navigator>
);

export default SettingStack;