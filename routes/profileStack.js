/*--- 
  SUMMARY:
  This file creates the stack navigation for navigating the Profile Screen

  SCREENS:
  - profile.js
---*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Profile from "../screens/profile";
import Registration from "../screens/registration";
import Inputs from "../screens/input";
import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#304857",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
  >
    <Screen
      name="Profile"
      component={Profile}
      options={{
        title: "Profile",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#304857"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />

    <Screen
      name="Inputs"
      component={Inputs}
      options={{
        title: "Log In",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#304857"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />

    <Screen
      name="Register"
      component={Registration}
      options={{
        title: "Register",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#304857"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />

<Screen
      name="About"
      component={About}
      options={{
        title: "About",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#304857"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </Navigator>
);

export default ProfileStack;
