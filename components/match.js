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
            <Text style={styles.username}>Peepeepoopoo</Text>
        )
        
    }

    
}