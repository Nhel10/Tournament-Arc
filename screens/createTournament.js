import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

export default function CreateTournamentEvent({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                 Create Tournament Page
            </Text>
        </View>
    )
}


