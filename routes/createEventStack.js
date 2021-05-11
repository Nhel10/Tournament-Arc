import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateEvent from "../screens/createEventScreen";
import Icon from "react-native-vector-icons/Ionicons";
const { Navigator, Screen } = createStackNavigator();

export const CreateEventStack = ({ navigation }) => (
  <Navigator>
    <Screen
      name="Create Event"
      component={CreateEvent}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

export default CreateEventStack;
