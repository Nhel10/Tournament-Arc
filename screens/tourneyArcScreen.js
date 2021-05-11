

import React from 'react';
import { useState } from "react";
import { StyleSheet, View, ScrollView, Text, SafeAreaView, TextInput, TouchableOpacity, Button, Alert, Image, Touchable } from 'react-native';
import { globalStyles } from '../styles/global';
import Images from '../index';
import Dialog from "react-native-dialog";
import { Dimensions } from 'react-native';
import { BracketButton } from '../components/bracket';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';

export default function TourneyeArcScreen() {
    const [visible, setVisible] = useState(false);
    const [name, onChangeName] = React.useState("");
    const [desc, onChangeDesc] = React.useState("");
    var tournament = window.events[window.eventID].tournaments[window.tournamentID];
    const [visible2, setVisible2] = useState(false);
    const [playerName, onChangePlayerName] = React.useState("");

    const handlePlayerAdd = () => {
        var hi = new User(playerName, "image0");
        window.brackets[0].addPlayer(hi);
        setVisible(false);
    }

    const handleCancel = () => {
        setVisible(false);
        setVisible2(false);
    }

    const styles = StyleSheet.create({
        container: {
            paddingTop: 23
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#304857',
            borderWidth: 2
        },
        inputs: {
            margin: 1,
            borderWidth: 1,
            flexDirection: 'column',
        },
        submitButton: {
            backgroundColor: '#304857',
            padding: 10,
            margin: 15,
            height: 40,
        },
        submitButtonText: {
            textAlign: 'center',
            color: 'white'
        },
        scrollViewHolder:
        {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: 'rgba(0,0,0,0.5)',
            borderBottomColor: 'rgba(0,0,0,0.5)'
        },
        separator:
        {
            width: 1,
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        item:
        {
            color: 'black',
            textAlign: 'center'
        },
        tinyLogo: {
            width: 100,
            height: 60,
        },
    })
    const showDialog = () => {
        setVisible(true);
    };

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
            <Dialog.Container visible={visible}>
                <Dialog.Title>Edit Event Details</Dialog.Title>
                <Dialog.Input label="Bracket Name" value={name} onChangeText={onChangeName}></Dialog.Input>
                <Dialog.Input label="Bracket Description" numberOfLines={4} multiline value={desc} onChangeText={onChangeDesc}></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Add" onPress={() => { tournament.addBracket(name, desc); setVisible(false); }} />
            </Dialog.Container>

            <Dialog.Container visible={visible2}>
                <Dialog.Title>Add Player</Dialog.Title>
                <Dialog.Input label="Player Username" value={playerName} onChangeText={onChangePlayerName}></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Add" onPress={handlePlayerAdd} />
            </Dialog.Container>
            <TouchableOpacity onPress={showDialog} >
            </TouchableOpacity>
            <BracketButton name={name} BID={0}/>
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