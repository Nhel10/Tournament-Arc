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
import {match} from './match';
export class Round {
    constructor(){
        this.participants = [];
        this.winnerList = [];
        this.matchList = [];
        this.complete = false;
        this.displayMatch = [];
    }

    addParticipants(player){
        this.participants.push(player);
    }

    addWinner(player){
        this.winnerList.push(player);
    }

    addMatch(match){
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
        this.displayMatch.push(
            <View style={{paddingLeft: 25, marginTop: 10}}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Winners Round 1
                </Text>
              <Text style={{fontSize: 10}}> Apr, 18, 2021 7:00PM PDT</Text>
            </View>
        )
        var i = 0;
        for(i = 0; i < this.matchList.length; i++){
            this.displayMatch.push(this.matchList[i].renderMatch())
        }
        return (this.displayMatch)
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

    








