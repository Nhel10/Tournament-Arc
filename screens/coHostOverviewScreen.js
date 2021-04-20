import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Avatar, Card, Title, Paragraph, Icon} from "react-native-paper";

export default function CoHostOverviewScreen(navigation) {
    return (
        <ScrollView style={globalStyles.container}>
  
            <Card style={style.eventCard}>
                <Card>
                <Image
                    style={style.image}
                    source={require("../assets/night.jpg")}
                ></Image>
                <Title style={style.eventTitle}>
                    Planned Under Night Event 1 - Bracket 2
                </Title>
                </Card>
                <Card>
                <Title style={style.eventTitle}>
                    Description
                </Title>
                </Card>
                <Text>
                    Only the best of the best will make it to the finals ft. 16 of the top players around the world.
                </Text>
                <Card>
                <Button
                    title = "Go to Edit"
                />
                </Card>
                <Card>
                <Button
                    title = "Drop tournament"
                />
                </Card>
            </Card>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    userCard: {
      flex: 1,
      flexDirection: "row",
    },
    socials: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    username: {
      fontWeight: "bold",
      fontSize: 20,
      paddingLeft: 10,
      paddingTop: 15,
    },
    eventCard: {
      marginTop: 15,
    },
    headerTitle: {
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 25,
      fontWeight: "bold"
    },
    image: {
      width: 415,
      height: 120,
      resizeMode: "stretch",
    },
    eventTitle: {
      fontSize: 15,
      paddingLeft: 10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 60,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
    },
  });