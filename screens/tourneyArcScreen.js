import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Images from '../index';
import { Dimensions } from 'react-native';
import { BracketButton } from '../components/bracket';
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';

export default function TourneyeArcScreen() {
    var tournament = window.events[window.eventID].tournaments[window.tournamentID];
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ resizeMode: 'stretch', width: Dimensions.get('window').width, height: 150 }} source={Images[tournament.game]}
            />
            <View style={{marginLeft: 5}}>
                <Title style={styles.title}>{tournament.name}</Title>
            </View>
            <View style={{marginLeft: 10}}>
                <Text style = {styles.caption}>1v1 64 Competitor Bracket Single Elimination </Text>
                <Text style = {styles.caption}>- Online </Text>
                <Text style={styles.description}>{tournament.desc}</Text>

                <Text style = {styles.time}>Start Time:  </Text>
                <View style={{marginLeft: 15}}> 
                    <Text style={styles.timeCap}>{tournament.date.toDateString()} {tournament.date.getHours()}:{tournament.date.getMinutes()}</Text>
                </View>
                <Text style = {styles.time}>End Time:  </Text>
                <View style={{marginLeft: 15}}> 
                    <Text style={styles.timeCap}>{tournament.endDate.toDateString()} {tournament.endDate.getHours()}:{tournament.endDate.getMinutes()}</Text>
                </View>

                <Text style = {styles.title}></Text>
            </View>
            <BracketButton />
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