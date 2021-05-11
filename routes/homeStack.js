/*--- 
  SUMMARY:
  This file creates the stack navigation for navigating the homepage 

  SCREENS:
  - home.js
  - reviewDetails.js

---*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
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
      name="Home"
      component={Home}
      options={{
        title: "Home Screen",
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
      name="ReviewDetails"
      component={ReviewDetails}
      options={{
        title: "Review Details",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#BAD7E6"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </Navigator>
);

export default HomeStack;
