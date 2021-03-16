import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function chatScreen({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}>
                 Setting Screen
            </Text>
        </View>
    )
}
