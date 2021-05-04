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

export class Bracket {
    constructor(name, desc, game, EID, TID, BID) {
        this.name = name;
        this.desc = desc;
        this.game = game;
        this.EID = EID;
        this.TID = TID;
        this.BID = BID
        this.players = [];
        this.cohosts = [];
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

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