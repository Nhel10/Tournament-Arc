import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
//import { CreateTournamentEvent } from './src/graphql/mutations.graphql';
import { CreateTournamentEvent } from 'graphql';
import { crtTour as createTournamentEvent, dltTour as deleteTournamentEvent, updTour as updateTournamentEvent } from './'

//const initialFormState = { eventName: '', eventDescription: '', eventOrganizingBody: '', eventLocation: '', eventStartDate: '', eventEndDate: '', eventPrizeMoney: '' }

export default function CreateTournamentEvent({navigation}) {
    //https://acloudguru.com/blog/engineering/8-steps-to-building-your-own-serverless-graphql-api-using-aws-amplify used this source
    //const [eventName, ]
    state = { eventName: '', eventDescription: '', eventOrganizingBody: '', eventLocation: '', eventStartDate: '', eventEndDate: '', eventPrizeMoney: '' }
    createEvent = async () => {
        const tournamentEvent = { 
            name: this.state.eventName,
            description: this.state.eventDescription,
            organizingBody: this.state.eventOrganizingBody,
            location: this.state.eventLocation,
            startDate: this.state.eventStartDate,
            endDate: this.state.eventEndDate,
            totalPrizeMoney: this.state.eventPrizeMoney }
        await API.graphql(graphqlOperation(CreateTournamentEvent, tournamentEvent))
        console.log('Tournament Event successfully created')
    }

    //async function 
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                 Create Tournament Page
            </Text>
        </View>
    )
}


