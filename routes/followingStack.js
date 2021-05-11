/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Follow from "../screens/following";
import UNICLR from "../screens/UNICLRgatewayScreen";
import GGS from "../screens/GGSgatewayScreen";
import mockUNICLR from "../screens/mockUNICLREvent";
import mockGGSEvent from "../screens/mockGGEvents";

const { Navigator, Screen } = createStackNavigator();

export const FollowingStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ADB2D3",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
  >
    <Screen
      name="Follow"
      component={Follow}
      options={{
        title: "Following",
        headerTitleAlign: "center",
      }}
    />

    <Screen
      name="UNICLR Gateway"
      component={UNICLR}
      options={{
        title: "Select Under Night Event",
        headerTitleAlign: "center",
      }}
    />

    <Screen
      name="GGS Gateway"
      component={GGS}
      options={{
        title: "Select Guilty Gear Event",
        headerTitleAlign: "center",
      }}
    />
    <Screen name="Mock UNICLR Event" component={mockUNICLR} />
    <Screen name="Mock GGS Event" component={mockGGSEvent} />
  </Navigator>
);

export default FollowingStack;
