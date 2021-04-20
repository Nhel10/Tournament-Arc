import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export class Event {
    players = [];
    cohosts = [];
    tournaments = [];

    constructor(name, desc, startDate, endDate, host) {
        this.name = name;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.host = host;
    }
}

export class EventButton extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
        endDate: PropTypes.instanceOf(Date)
    }

    render() {
        const { name, date, endDate } = this.props;

        return (
            <View>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 20}}>{name}</Text>
                    <Text> {date.toDateString()} - {endDate.toDateString()}</Text>
                </TouchableOpacity>
            </View>);
    }
}