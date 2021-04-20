import React from 'react';
import { Alert, moment } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CoHostCheckInScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={style.headerTitle}>
                <Button 
                    title = "Co-host click here to check in"
                    onPress = {() => Alert.alert("Co-host checked in at ", new Date().getTime)}
                    /*
                    Username/ID is taken and put into a list that holds all co-hosts that have checked in.
                    */
                />
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    userCard: {
      flex: 1,
      flexDirection: "row",
    },
    socials: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    username: {
      fontWeight: "bold",
      fontSize: 20,
      paddingLeft: 10,
      paddingTop: 15,
    },
    eventCard: {
      marginTop: 15,
    },
    headerTitle: {
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 25,
      fontWeight: "bold"
    },
    image: {
      width: 415,
      height: 120,
      resizeMode: "stretch",
    },
    eventTitle: {
      fontSize: 15,
      paddingLeft: 10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 60,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
    },
});