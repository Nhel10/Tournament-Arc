import React, { Component } from "react";
import { render } from "react-dom";
import {UserButton} from "./user";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
  } from "react-native";
export class match {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.player1Score = 0;
        this.player2Score = 0;
        this.complete = false;
    }

    changePlayer1Score(score){
        this.player1Score = score;
    }

    changePlayer2Score(score){
        this.player2Score = score;
    }

    returnWinner(){
        if(this.player1Score < this.player2Score){
            return this.player2
        } else if (this.player1Score > this.player2Score){
            return this.player1
        }
    }

    addPlayer1(player){
        this.player1 = player;
    }

    addPlayer2(player){
        this.player2 = player;
    }

    getPlayer1(){
        return this.player1;
    }

    getPlayer2(){
        return this.player2;
    }

    getPlayter1Score(){
        return this.player1Score;
    }

    getPlayer2Score(){
        return this.player2Score;
    }

    setPlayer1Score(score){
        this.player1Score = score;
    }

    setPlayer2Score(score){
        this.player2Score = scroe;
    }

    renderMatch(){
        return (
            <View style = {styles.firstBracket}>
                <View style={{borderBottomWidth: 1}}>
                    <View style={{ flexDirection: "row" }}>
                        <UserButton username = {this.player1.username} img={this.player1.image} UID={this.player1.UID} ></UserButton>
                        <View style={styles.scoreBlock}>
                            <Text style={{textAlign: "center", color:"white"}}>
                                {this.player1Score} 
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{borderRadius: 1}}>
                    <View style={{ flexDirection: "row" }}>
                    <UserButton username = {this.player2.username} img={this.player2.image} UID={this.player2.UID} ></UserButton>
                        <View style={styles.scoreBlock}>
                            <Text style={{textAlign: "center", color:"white"}}>
                                {this.player2Score} 
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
        )
        
    }
    testRender(){
        return (
            <Text style={styles.username}>Peepeepoopoo</Text>
        )
    }

    
}
const styles = StyleSheet.create({
    firstBracket: {
      marginLeft: 20,
      marginTop: 30,
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
  