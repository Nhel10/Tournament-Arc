import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, Button, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Avatar, Card, Title, Paragraph, Icon } from "react-native-paper";

export default function CoHostOverviewScreen(navigation) {
    return (
        <ScrollView style={globalStyles.container}>
            <Card style={style.eventCard}>
                <Card>
                  <Image
                    style={style.image}
                    source={require("../assets/night.jpg")}
                  ></Image>
                  <Title style={style.title}>
                    Planned Under Night Event 1 - Bracket 2
                  </Title>
                </Card>
                <Card>
                  <Title style={style.header}>
                    List of Participants
                  </Title>
                </Card>
                  <Text style={style.players1}>
                    Player 1
                  </Text>
                  <Text style={style.players}>
                    Player 2
                  </Text>
                  <Text style={style.players}>
                    Player 3
                  </Text>
                  <Text style={style.players}>
                   Player 4
                  </Text>
                  <Text style={style.players}>
                    Player 5
                  </Text>
                  <Text style={style.players}>
                    Player 6
                  </Text>
                  <Text style={style.players}>
                    Player 7
                  </Text>
                  <Text style={style.players}>
                    Player 8
                  </Text>
                <View style={style.FixToText}>
                  <Button
                    title="Add player"
                    onPress={() => Alert.alert('Add a player')}
                  />
                  <Button
                    title="Remove player"
                    onPress={() => Alert.alert('Remove a player')}
                  />
                </View>
                <Card>
                  <Text style={style.header2}>
                    Start Date
                  </Text>
                </Card>
                <Card>
                  <Text style={style.date}>
                    November 21, 2021
                  </Text>
                </Card>
                <Card>
                  <Button
                  title="Drop Tournament"
                  onPress={() => Alert.alert('Are you sure you no longer wish to co-host this tournament?')}
                  />
                </Card>
            </Card>
        </ScrollView>
    )
}

const style = StyleSheet.create({
  eventCard: {
    marginTop: 15
  },
  image: {
    width: 415,
    height: 120,
    resizeMode: "stretch",
  }, 
  title: {
    fontSize: 20,
    textAlign: 'center',
    borderColor: '#304857',
    borderBottomWidth: 2,
    padding: 3,
    backgroundColor: '#87cefa',
  },
  header: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    borderColor: '#304857',
    borderBottomWidth: 2,
  },
  header2: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    borderColor: '#304857',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: '#7fffd4',
  },
  players1: {
    marginLeft: 100,
    marginRight: 100,
    padding: 5,
    fontSize: 14,
    textAlign: 'center',
    borderColor: '#304857',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  players: {
    marginLeft: 100,
    marginRight: 100,
    padding: 5,
    fontSize: 14,
    textAlign: 'center',
    borderColor: '#304857',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  FixToText: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    textAlign: 'center',
    padding: 5,
    borderColor: '#304857',
    borderBottomWidth: 2,
  },
});