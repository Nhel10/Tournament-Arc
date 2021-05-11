import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../screens/competitorsCheckInList";
const { Navigator, Screen } = createStackNavigator();

export const CheckInList = () => (
  <Navigator>
    <Screen
      name="List"
      component={List}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default CheckInList;
