import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import coHostInterface from "./coHostInterfaceStack";
import GatewayScreen from "../screens/coHostGatewayScreen";
import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createStackNavigator();

export const coHostGatewayStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#304857",
      },
      headerTintColor: "#fff",
      height: 60,
    }}
    initialRouteName="Co-Host Gateway Screen"
  >
    <Screen
      name="Co-Host Gateway Screen"
      component={GatewayScreen}
      options={{
        title: "Select Tournament Bracket",
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

    <Screen name="Co-Host Interface" component={coHostInterface} />
  </Navigator>
);

export default coHostGatewayStack;
