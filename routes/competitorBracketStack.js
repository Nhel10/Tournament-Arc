import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTournament from "../screens/myTournamentScren";
import Icon from "react-native-vector-icons/Ionicons";
import CompetitorBracket from '../screens/competitorBracket' 

const { Navigator, Screen } = createStackNavigator();

export const CompetitorBracketStack = ({ navigation }) => (
  <Navigator>
    <Screen
      name="Brackets"
      component={CompetitorBracket}
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

export default CompetitorBracketStack;