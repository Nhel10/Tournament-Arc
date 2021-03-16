import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MyEventScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>My Event Screen</Text>
        </View>
    )
}
