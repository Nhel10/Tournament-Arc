/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "../screens/competitorsCheckInList";

const { Navigator, Screen } = createStackNavigator();

export const ChatStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#BE7C4D",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
  >
    <Screen
      name="Chat"
      component={Chat}
      options={{
        title: "Chat",
        headerTitleAlign: "center",
      }}
    />
  </Navigator>
);

export default ChatStack;
