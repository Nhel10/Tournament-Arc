import React, { Component } from "react";
import { render } from "react-dom";
import { Avatar } from 'react-native-paper';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
  } from "react-native";
import {match} from './match';
export class Round {
    constructor(match,round){
        this.participants = [];
        this.winnerList = [];
        this.matchList = [];
        this.complete = false;
        this.displayMatch = [];
        this.totalMatches = match;
        this.round = round
        console.log("THIS MANY MATCHES");
        console.log(this.totalMatches);
    }

    addParticipants(player){
        this.participants.push(player);
    }

    addWinner(player){
        this.winnerList.push(player);
    }

    addMatch(match) {
        this.participants.push(match.player1);
        this.participants.push(match.player2);
        this.matchList.push(match);
    }

    // Gets the players from the participants and put them in matches based on pairs of 2 
    formatMatchList(){
        var i = 0;
        for(i = 0; i < this.participants.length; i++){
            if((i % 2) == 1){
                this.matchList.push(new match(this.participants[i-1], this.participants[i]));
            }
        }
    }

    getComplete(){
        return this.complete;
    }

    getWinnerList(){
        return this.winnerList;
    }

    // Functions checks if the round is complete if the winnerList is half the size of the participants list size 
    isComplete(){
        var participantsList = this.participants.length;
        var winnerlength = this.matchList.length;
        if ((participantsList/winnerlength) == 2){
            return true;
        } else {
            return false;
        }
    }

    renderRoundMatch(){
        var i = 0;
        if(this.participants.length == 0){
            for (i = 0; i < this.totalMatches; i++){
                this.addMatch(new match(window.users[9], window.users[9]));
            }
        } 
            var i = 0;
            var intRound = this.round;
            var roundToString = intRound.toString();
            var stringRound = "Round ";
            var stringRound = stringRound + roundToString
            // Pushes all the match
            temp = [];
            for (i = 0; i < this.matchList.length; i++) {
                temp.push(
                    <View style={{ flexDirection: "column" }}>
                        {this.matchList[i].renderMatch()}
                    </View>)
            }
            this.displayMatch.push(
                <View style={{ flexDirection: "column" }}>
                <View style={{paddingLeft: 60, marginTop: 10}}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        {stringRound}
                    </Text>
                    </View>
                    {temp}
                </View>
            )

        
        //return (this.displayMatch)
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
          width: 130,
        },
        username: {
          marginLeft: 5,
        },
        scoreBlock:{
            backgroundColor: "gray",
            width: 20,
            marginLeft: 70,
            
        }
      });

    








