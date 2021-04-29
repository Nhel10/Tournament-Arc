import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';

export default function TourneyeArcScreen () {
    return (
        <View style={{flex: 1}}>
            <View style={{marginLeft: 5}}>
            <Title style={styles.title}>Street Fighter 5 Tournament</Title>
            </View>
            <View style={{marginLeft: 10}}>
                <Text style = {styles.caption}>1v1 64 Competitor Bracket Single Elimination </Text>
                <Text style = {styles.caption}>- Online </Text>
                <Text style = {styles.description}>This will be a short description of the tourney event </Text>

                <Text style = {styles.time}>Start Time:  </Text>
                <View style={{marginLeft: 15}}> 
                     <Text style = {styles.timeCap}>October 12,2021 10:30AM </Text>
                </View>
                <Text style = {styles.time}>End Time:  </Text>
                <View style={{marginLeft: 15}}> 
                    <Text style = {styles.timeCap}>October 12,2021 02:00PM </Text>
                </View>

                <Text style = {styles.title}></Text>
            </View>

        </View>
    )
       
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: 'bold',
    },
    timeCap: {
        fontSize: 15,
        marginTop: 15,
    },
    caption: {
        fontSize: 16,
        marginTop: 15
    },

    description: {
        fontSize: 14,
        marginTop: 10
    },

    moreInput: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },

    checkbox: {
        fontSize: 13,
    },
    titles: {
        fontSize: 16,
        textAlign: 'center'
    },

    input: {
        height: 40,
        width: 300,
        margin: 1,
        borderWidth: 1,
        flexDirection: 'column',
      },
    
      inputs: {
        height: 100,
        width: 300,
        margin: 1,
        borderWidth: 1,
        flexDirection: 'column',
      },

      container : {
        marginTop: 30,
        flex            : 1,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
    },

    moreInput: {
        fontSize: 13,
        marginTop: 10,
        fontWeight: 'bold',
    },
});