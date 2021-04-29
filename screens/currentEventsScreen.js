import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import { Event, EventButton } from '../components/event';

export default function currentEventsScreen() {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 23
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#304857',
            borderWidth: 2
        },
        submitButton: {
            backgroundColor: '#304857',
            padding: 10,
            margin: 15,
            height: 40,
        },
        submitButtonText: {
            textAlign: 'center',
            color: 'white'
        },
        scrollViewHolder:
        {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: 'rgba(0,0,0,0.5)',
            borderBottomColor: 'rgba(0,0,0,0.5)'
        },
        separator:
        {
            width: 1,
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        item:
        {
            color: 'black',
            textAlign: 'center'
        },
        tinyLogo: {
            width: 100,
            height: 60,
        },
    })

    var eventsView = [];
    console.log(window.events.length);
    for (let i = 0; i < window.events.length; i++) {
        eventsView.push(
            <View>
                <View style={styles.separator} />
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <EventButton name={window.events[i].name} date={window.events[i].startDate} endDate={window.events[i].endDate} EID={i}>
                    </EventButton>
                </View>
                <View style={styles.separator} />
            </View>
        )
    }



    return (
        <View>
            {eventsView}
        </View >
    )
}

