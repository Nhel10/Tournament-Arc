import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { User } from "./user";
import { useNavigation } from '@react-navigation/native';
import { Tournament } from "./tournament";
import { Dimensions } from 'react-native';
import Images from '../index';

/* 
 Calling new Event(args) pushes a newly created event object onto global array window.events in App.js
 Args:
 name, desc - String
 startDate, endDate - Date()
 host - User() custom object, found in dir -> "./user"

Functions:
addCohost(User()) - pushes an existing user to list of cohosts
addPlayer(User()) - pushes an existing user to list of players
addTournament(args) - pushes a new Tournament() to list of tournaments
 */

export class Event {
    constructor(name, desc, startDate, endDate, host) {
        this.players = [];
        this.cohosts = [];
        this.tournaments = [];
        this.name = name;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.host = host;
        this.EID = window.events.length;
        this.deleted = 0;
        window.events.push(this);
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addTournament(name, desc, date, endDate, game) {
        this.tournaments.push(new Tournament(name, desc, game, date, endDate, this.EID, this.tournaments.length));
    }

    deleteEvent() {
        this.players = [];
        this.cohosts = [];
        this.deleted = 1;
    }
}

/*
Simple display button that navigates to event
In order to create the button pass in arguments from the Event class
*/
export class EventButton extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        EID: PropTypes.number.isRequired,
        deleted: PropTypes.number.isRequired
    }

    render() {
        const { name, date, endDate, EID, deleted } = this.props;
        console.log(name);
        console.log(date);
        console.log(endDate);
        console.log(EID);

        if (deleted == 0)
            return (
                <GoToButton name={name} date={date} endDate={endDate} EID={EID} screenName='Current Event' />)
        else return null;
    }
}

function GoToButton({ name, date, endDate, EID, screenName }) {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => { window.eventID = EID; console.log(window.eventID); navigation.navigate(screenName); }}>
                <Image style={{ resizeMode: 'stretch', width: Dimensions.get('window').width, height: 150 }} source={Images["image0"]}
                />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
                <Text> {date.toDateString()} - {endDate.toDateString()}</Text>
            </TouchableOpacity>
        </View>
    );
}