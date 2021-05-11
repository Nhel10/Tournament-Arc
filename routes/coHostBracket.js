import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BracketScreen from "../screens/coHostBracketScreen";
const { Navigator, Screen } = createStackNavigator();
import Icon from "react-native-vector-icons/Ionicons";
import bracket from "../screens/displayBracket";

export const CoHostBracket = () => (
  <Navigator>
    <Screen
      name="Bracket Screen"
      component={bracket}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default CoHostBracket;
