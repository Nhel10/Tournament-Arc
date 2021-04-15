import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
<<<<<<< HEAD

export default function CreateTournamentEvent({navigation}) {
=======
//import { CreateTournamentEvent } from './src/graphql/mutations.graphql';
import { CreateTournamentEvent } from 'graphql';

export default function ReviewDetails({navigation}) {
    //https://acloudguru.com/blog/engineering/8-steps-to-building-your-own-serverless-graphql-api-using-aws-amplify used this source
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
>>>>>>> parent of 2cf2f18 (Making some changes)
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                 Create Tournament Page
            </Text>
        </View>
    )
}


