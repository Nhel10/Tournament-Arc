/*--- 
  SUMMARY:
  This file creates the stack navigation for registration.

  SCREENS:
  - input.js
  - registration.js

---*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../screens/registration";
import Inputs from "../screens/settingScreen";
import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createStackNavigator();

export const RegistrationStack = ({ navigation }) => (
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
  </Navigator>
);

export default RegistrationStack;
