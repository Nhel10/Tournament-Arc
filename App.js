import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/drawer';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { Authenticator } from 'aws-amplify-react-native'

Amplify.configure(config)

export default function App() {
    return (
        <View>
            <Authenticator>
            </Authenticator>
        </View>
    );

}
