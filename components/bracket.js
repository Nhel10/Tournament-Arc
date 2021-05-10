import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/*
 Calling Tournament().addBracket(args) on an existing tournament pushes a newly created bracket object into that tournament
 Args:
 name, desc - String, passed into Tournament().addBracket()
 game - string, handled automatically by Tournament().addBracket()
 EID, TID, BID - numbers, handled automatically by Tournament().addBracket()
 dates - Date() ---- TODO

Functions:
addCohost(User()) - pushes an existing user to list of cohosts
addPlayer(User()) - pushes an existing user to list of players
addBracket(args) - pushes a new Bracket() to list of brackets
 */
import React, { Component } from "react";
import { render } from "react-dom";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
  } from "react-native";
import {Round} from "./round";
export class Bracket {
    constructor(name, desc, game) {
        this.name = name;
        this.desc = desc;
        this.game = game;
        //this.EID = EID; // Event ID 
        //this.TID = TID; // Tournament ID 
        //this.BID = BID // Bracket ID 
        this.players = [];
        this.cohosts = [];
        this.listOfRounds = [];
        window.brackets.push(this);
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }

    // Function starts the first round of brackets 
    startBracket(){
        this.generateRoundList();
        var i;
        for(i = 0; i < this.players.length; i++){
            this.listOfRounds[0].addParticipants(this.players[i]);
        }
        this.listOfRounds[0].formatMatchList();
    }

    // Function starts the next round of brackets if one is completed 
    startNextRound(){
        // Get next round 
        var i;
        for(i = 0; i < this.listOfRounds.length; i++){
            if(this.listOfRounds[i].isComplete() == true){
                // Get the winner list from a completed round and puts it as a participant list for the next round 
                this.listOfRounds[i+1] = this.listOfRounds[i].getWinnerList();
                this.listOfRounds[i].formatMatchList();
                break;
            }
        }
    }

     // Generates the amound of rounds for a tournament bracket based on the amound of participants 
     generateRoundList(){
        var length = this.players.length;
        var r = Math.floor(Math.log(length)/Math.log(2)); // Determines the amound of rounds based on participants 
        var i;
        /* For loop will create new Rounds into the listOfRounds  */
        for (i = 0; i < r; i++) {
            this.listOfRounds.push(new Round());
        }
    }

    testRender(){
        return (
            <Text style={styles.username}>Peepeepoopoo</Text>
        )
    }

}
const styles = StyleSheet.create({
    firstBracket: {
      marginLeft: 10,
      marginTop: 15,
      flexDirection: "column",
      borderRadius: 1,
      borderWidth: 1,
      borderColor: "gray",
      width: 170,
    },
    username: {
      marginLeft: 5,
    },
  });

export class BracketButton extends Component {
    static propTypes = {
    }

    render() {
        return (
            <GoToButton screenName='Current Bracket' />
        )
    }
}

function GoToButton({screenName }) {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate(screenName) }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bracket</Text>
            </TouchableOpacity>
        </View>
    )
}