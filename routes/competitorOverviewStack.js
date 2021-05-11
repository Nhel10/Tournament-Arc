import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompCheckin from "../screens/competitorBracket";
const { Navigator, Screen } = createStackNavigator();
import bracket from "../screens/displayBracket";

export const CompetitorOverviewStack = () => (
  <Navigator>
    <Screen
      name="OverviewScreen"
      component={bracket}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default CompetitorOverviewStack;
