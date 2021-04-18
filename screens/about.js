import React from 'react';
import { View, Text, Image, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 30 }}><Text style={{ color: 'green' }}>                   About us</Text></Text></Text>

            <Text style={globalStyles.pageText}></Text> 

            <Text style={globalStyles.pageText}>  We are JRs from California State University, Long Beach. Our mobile application, Tournament Arc, was created as a platform to set up fun and competitive matches among friends, family, and other competitors. We wish you have a fun time and invte your friends! Thank you! From, </Text>
            
            <Text style={globalStyles.pageText}></Text> 

            <Text style={globalStyles.pageText}>                                           Richie Ear  <Text style={{ color: 'blue' }}>FridgeRaider#1206</Text> </Text>
            <Text style={globalStyles.pageText}>                                              John Quach  <Text style={{ color: 'blue' }}>john1g#7047</Text> </Text>
            <Text style={globalStyles.pageText}>                                                Ryan Shannon  <Text style={{ color: 'blue' }}>Ry#0151</Text> </Text>
            <Text style={globalStyles.pageText}>                                               John So  <Text style={{ color: 'blue' }}>bjohnnso#4962</Text> </Text>
            <Text style={globalStyles.pageText}>                                              Louie Yonzon <Text style={{ color: 'blue' }}>Tanuki#1214</Text> </Text>
           
            <Text style={globalStyles.pageText}></Text> 

            <Image style={{ width: 400, height: 300}} source={{uri: 'https://i.imgur.com/8E9ngUx.png'}}/>
        </View>
    )
}
