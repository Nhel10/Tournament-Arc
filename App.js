import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
<<<<<<< HEAD
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
//import { crtTour as createTournamentEvent, dltTour as deleteTournamentEvent, updTour as updateTournamentEvent } from './graphql/mutations'
import * as queries from './graphql/queries';
import { CreateTournamentEvent } from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

Amplify.configure(awsconfig);

export default function App() { 
  async function createTournamentEvent() {
    try {
      //const createTournament = await API.graphql({ query: queries.listTodos, authMode: 'AWS_IAM'}); 
      const createTournament = await API.graphql(graphqlOperation(queries.getTodo, { id: 'id', authMode: 'AWS_IAM' }));
      console.log(createTournament);
    } catch (error) {
      console.log(error);
    }
    
  }

=======
import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
>>>>>>> parent of 2cf2f18 (Making some changes)
  return (
    <View style={styles.container}>
      <Authenticator>
        <Text>Home</Text>
        <button onClick={createTournamentEvent}>Create Tournament</button>
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})