/*--- 
  SUMMARY:


  SCREENS:
 
---*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Create from "../screens/createTournament";

const { Navigator, Screen } = createStackNavigator();

export const CreateTourneyStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3C896D",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
  >
    <Screen
      name="CreateTourney"
      component={Create}
      options={{
        title: "Create A Tournament",
        headerTitleAlign: "center",
      }}
    />
  </Navigator>
);

export default CreateTourneyStack;
