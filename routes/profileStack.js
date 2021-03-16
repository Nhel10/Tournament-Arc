import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profileScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({navigation}) => (
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
      name='Profile'
      component={Profile}
      options={{ 
        title: 'Profile Screen', 
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

export default ProfileStack;