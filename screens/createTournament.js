import React, { useEffect } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { CreateTournamentEvent } from '../src/graphql/mutations';
import { listTournamentEvents } from '../src/graphql/queries';

// const createEventInputs = {
//     eventName: "Hope this works",
//     description: "I really, really, really hope this works, but itll suck to hardcode it all",
//     organizingBody: "JRs",
//     location: "CSULB",
//     startDate: "2021-15-04",
//     endDate: "2021-16-04",
//     totalPrizeMoney: 100000
// };

export default function createTournamentEvent({navigation}) {
    // async function createEvent() {
    //     try {
    //       const createTournament = await API.graphql(graphqlOperation(CreateTournamentEvent, {input: createEventInputs}));
    //       console.log(createTournament, 'New event made');
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }
    useEffect(() => {
        const fetchTournaments = async () => {
            //fetch all tournaments
            try {
                const response = await API.graphql(graphqlOperation(listTournamentEvents));
                console.log(response);
            } catch(error) {
                console.log(error);
            }
        }

        fetchTournaments();
    });

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                Create Tournament Page
                <button onClick={fetchTournaments}>Fetch Tournament</button>
                {/* <button onClick={createEvent}>Create Tournament</button> */}
            </Text>
        </View>
    )
}


