import React, { useState } from 'react';
import { Button, View, Text, Image, TextInput, Switch, Alert} from 'react-native';
import { globalStyles } from '../styles/global';

// Develop an interface for users to unregsiter from an Event or Bracket

export default function ReviewDetails({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 17 }}><Text style={{ color: 'blue' }}> Unregisteration from Event/Tournament</Text></Text></Text>

            <Text style={globalStyles.pageText}></Text>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: 'purple' }}> Unregister from this event/tournament?</Text></Text></Text>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 2 }}><Text style={{ color: 'blue' }}> </Text></Text></Text>

            <Button title="Unregister" color="#9966ff" onPress={() => Alert.alert('You are unregisered from the event/tournament.')} />

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 2 }}><Text style={{ color: 'blue' }}> </Text></Text></Text>

            <Button title="No, stay in the event/tournament" color="#cc99ff" onPress={() => Alert.alert('You are still in the event/tournament.')} />

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 2 }}><Text style={{ color: 'blue' }}> </Text></Text></Text>
            
            <Image style={{ width: 400, height: 300}} source={{uri: 'https://images.unsplash.com/photo-1560317620-1ba88ae56e7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'}}/>

        </View>
        
    )

}