import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Bracket } from './bracket';
import Images from '../index';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/*
 Calling Event().addTournament(args) on an existing event pushes a newly created tournament object into that event
 Args:
 name, desc, game - String, passed into Event().addTournament()
 EID, TID - numbers, handled automatically by Event().addTournament()
 dates - Date() ---- TODO

Functions:
addCohost(User()) - pushes an existing user to list of cohosts
addPlayer(User()) - pushes an existing user to list of players
addBracket(args) - pushes a new Bracket() to list of brackets
 */
export class Tournament {
    constructor(name, desc, game, date, endDate, EID, TID) {
        this.name = name;
        this.desc = desc;
        this.game = game;
        this.date = date;
        this.endDate = endDate;
        this.EID = EID;
        this.TID = TID;
        this.brackets = [];
        this.players = [];
        this.cohosts = [];
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addBracket(name, desc) {
        this.brackets.push(new Bracket(name, desc, this.game, this.EID, this.TID, this.brackets.length));
    }
}

export class TournamentButton extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        EID: PropTypes.number.isRequired,
        TID: PropTypes.number.isRequired
    }

    render() {
        const { name, img, date, endDate, EID, TID } = this.props;
        image = img;
        if (image == "")
            image = "image0";

        console.log(img);
        return (
            <GoToButton name={name} img={image} date={date} endDate={endDate} EID={EID} TID={TID} screenName='Current Tournament' />)
    }
}

function GoToButton({ name, img, date, endDate, EID, TID, screenName }) {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => { window.tournamentID = TID; console.log(window.eventID); navigation.navigate(screenName) }}>
                <Image style={{ resizeMode: 'stretch', width: Dimensions.get('window').width, height: 150 }} source={Images[img]}
                />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
                <Text> {date.toDateString()} - {endDate.toDateString()}</Text>
            </TouchableOpacity>
        </View>
    )
}