import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
//import { crtTour as createTournamentEvent, dltTour as deleteTournamentEvent, updTour as updateTournamentEvent } from './graphql/mutations'
import * as queries from './graphql/queries';
import { CreateTournamentEvent } from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

Amplify.configure(awsconfig);

//const initialFormState = { eventName: '', eventDescription: '', eventOrganizingBody: '', eventLocation: '', eventStartDate: '', eventEndDate: '', eventPrizeMoney: '' }

export default function App() {
  // const [tourInfo, setTourInfo] = useState([]);
  // const [formData, setFormData] = useState(initialFormState);

  // useEffect(() => {
  //   fetchTourInfo();
  // }, []);

  // async function fetchTourInfo() {
  //   const apiData = await API.graphql({ query: tourInfo });
  //   setNotes(apiData.data.tourInfo.items);
  //   console.log('Tournament Event info access granted')
  // }

  // async function createTournamentEvent() {
  //   if (!formData.eventName || !formData.eventDescription || !formData.eventOrganizingBody || !formData.eventLocation 
  //     || !formData.eventStartDate || !formData.eventEndDate || !formData.eventPrizeMoney) return;
  //   await API.graphql({ query: crtTour, variables: { input: formData } });
  //   setTourInfo([ ...tourInfo, formData ]);
  //   setFormData(initialFormState);
  //   console.log('Tournament Event successfully created')
  // }

  
  async function createTournamentEvent() {
    try {
      const createTournament = await API.graphql(graphqlOperation(queries.CreateTournamentEvent)); 
      console.log(createTournament);
    } catch (error) {
      console.log(error);
    }
    
  }

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