import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, Image, TextInput, Switch} from 'react-native';
import { globalStyles } from '../styles/global';

//Develop an interface for players to check in their competing bracket 
//simple box for user input and a button for submit
export default function ReviewDetails({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                 Competitor Check-In
            
            </Text> 
        
            <TextInput placeholder="Check-in code" style={{ fontSize: 15, paddingLeft: 3 }} />


       
            <Text style={globalStyles.pageText}>
                Do you want to check in? 
                <Switch
                    trackColor={{ false: "#767577", true: "#e1e4e8" }}
                    thumbColor={isEnabled1 ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </Text>
            <Image
                style={{ width: 400, height: 400}}
                source={{uri: 'https://images.unsplash.com/photo-1582801396492-705377f39876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80a'}}
            />
        </View>
        
    )

}