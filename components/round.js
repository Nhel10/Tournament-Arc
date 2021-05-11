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
    constructor(match){
        this.participants = [];
        this.winnerList = [];
        this.matchList = [];
        this.complete = false;
        this.displayMatch = [];
        this.totalMatches = match;
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
        var i = 0;
        if(this.participants.length == 0){
            for(i = 0; i < this.totalMatches; i++){
                this.displayMatch.push(
                    <View>
                        <View style={styles.firstBracket}>
                            <View style={{borderBottomWidth: 1}}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar.Image
                                        size={50}
                                        source={require('../assets/anonymous.jpg')}
                                    />
                                    <Text numberOfLines={1} style={{ width: 50, textAlign: 'center' }}>Unknown</Text>
                                    </View>
                                    <View style={styles.scoreBlock}>
                                        <Text style={{textAlign: "center", color:"white"}}>
                                            0
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{borderRadius: 1}}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Avatar.Image
                                            size={50}
                                            source={require('../assets/anonymous.jpg')}
                                        />
                                        <Text numberOfLines={1} style={{ width: 50, textAlign: 'center' }}>Unknown</Text>
                                    </View>
                                    <View style={styles.scoreBlock}>
                                        <Text style={{textAlign: "center", color:"white"}}>
                                            0
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>  
                )
            }
        } else if (this.participants.length != 0) {
            var i = 0;
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
                        Round 1
                    </Text>
                    </View>
                    {temp}
                </View>
            )

        }
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

    








