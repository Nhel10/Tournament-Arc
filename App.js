import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator>
        <Text>Home</Text>
      </Authenticator>
    </View>
  );
}
*/

export default function App() {
    return (
        //<View>
        //<Authenticator></Authenticator>
        <AppNavigator></AppNavigator>
        //</View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})