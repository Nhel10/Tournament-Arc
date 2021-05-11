import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TourneyTopTab from "./tournamentTopTab";
import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createStackNavigator();

export const TournamentStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#304857",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
    initialRouteName="Tourney"
  >
    <Screen
      name="Tourney"
      component={TourneyTopTab}
      options={{
        title: "Tournament Menu",
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

export default TournamentStack;
