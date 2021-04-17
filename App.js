import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
// import * as queries from './graphql/queries';
// import * as mutations from './graphql/mutations';
// import * as subscriptions from './graphql/subscriptions';
// import { CreateTournamentEvent } from './src/graphql/mutations.graphql';
import { listTournamentEvents } from './src/graphql/queries';

Amplify.configure(awsconfig);

// const createEventInputs = {
//   eventName: "Hope this works",
//   description: "I really, really, really hope this works, but itll suck to hardcode it all",
//   organizingBody: "JRs",
//   location: "CSULB",
//   startDate: "2021-15-04",
//   endDate: "2021-16-04",
//   totalPrizeMoney: 100000
// };

export default function App() { 
  // async function createEvent() {
  //   try {
  //     const createTournament = await API.graphql(graphqlOperation(CreateTournamentEvent, {input: createEventInputs}));
  //     console.log(createTournament, 'New event made');
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // }
  
    const fetchTournaments = async () => {
        //fetch all tournaments
        try {
            const tourneyList = await API.graphql(graphqlOperation(listTournamentEvents));
            const tourneyInfo = tourneyList.data.listTournamentEvents.items;
            console.log(tourneyInfo);
        } catch(error) {
            console.log(error);
        }
    }

    //fetchTournaments();

  return (
    <View style={styles.container}>
      {/* <Authenticator> */}
        <Text>Home</Text>
        <button onClick={fetchTournaments}>Create Tournament</button>
      {/* </Authenticator> */}
    </View>
  );
}
/* <button onClick={createEvent}>Create Tournament</button> */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})