import React, { useState } from 'react';
import { Button, View, Text, Image, TextInput, Switch, StyleSheet} from 'react-native';
import { globalStyles } from '../styles/global';

// Develop an interface for users to unregsiter from an Event or Bracket

export default function ReviewDetails({navigation}) {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 20 }}><Text style={{ color: "#336699" }}> Congratulations! You wont the event! 
            <Image style={{ width: 30, height: 30}} source={{uri: 'https://media.istockphoto.com/vectors/trophy-icon-on-transparent-background-vector-id1282548092?k=6&m=1282548092&s=170667a&w=0&h=BT0F-W32qG-5kXmS05iYZCNbW59HX2ZNqaay6NboYSs='}}/></Text></Text></Text>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 2 }}><Text style={{ color: "#336699" }}> </Text></Text></Text>

            <Text style={globalStyles.pageText}> <Text style={globalStyles.pageText}><Text style={{ fontSize: 17 }}><Text style={{ color: "black" }}> Tournament Winner: </Text></Text></Text><Image style={{ width:30, height: 20}} source={{uri: 'https://i.playboard.app/p/AATXAJzCCuyBmezQTn8Lvf-4EqAcaG5c-Hv5gUliPrk0AQ/default.jpg'}} />
            <Text style={{ fontSize: 15 }}><Text style={{ color: "#33cccc" }}> LeTarzaned  <Text style={{ color: 'green' }}>2kTarzanedlol#6023</Text>  <Text style={{ color: 'blue' }}>@tarzanedlol2</Text> <Text style={{ color: 'purple' }}> twitch.tv/2KTarzanedlol</Text></Text></Text></Text>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 5 }}><Text style={{ color: "#336699" }}> </Text></Text></Text>

            <Image style={{ width: 300, height: 400}} source={{uri: 'https://static.wikia.nocookie.net/nba2k/images/c/cc/NBA_2K20_Legend_Edition.jpeg/revision/latest?cb=20190909014925'}}/>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 5 }}><Text style={{ color: "black" }}> </Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: "black" }}> Price: $100 </Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: "black" }}> Sponsored by: </Text></Text></Text>

            <Image style={{ width: 300, height: 100}} source={{uri: 'https://1000logos.net/wp-content/uploads/2021/04/Chick-fil-A-logo.png'}}/>
        </View>
        
    )

}