import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTournament from "../screens/myTournamentScren";
import Icon from "react-native-vector-icons/Ionicons";
import CompetitorCheckIn from '../screens/competitorCheckIn' 

const { Navigator, Screen } = createStackNavigator();

export const CompetitorCheckInStack = ({ navigation }) => (
  <Navigator>
    <Screen
      name="Check In"
      component={CompetitorCheckIn}
      options={{
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

export default CompetitorCheckInStack;
