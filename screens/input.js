import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator>
        <Text>Home</Text>
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
