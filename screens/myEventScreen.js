import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export default function Profile({navigation}) {
    return (
      <ScrollView style={globalStyles.container}>
  
        <Card style={style.eventCard}>
          <Card>
            <Image
              style={style.image}
              source={require("../assets/night.jpg")}
            ></Image>
            <Title style={style.eventTitle}>
              Planned Under Night Event 1 
            </Title>
          </Card>

          <Card>
            <Image
              style={style.image}
              source={require("../assets/guiltygear.jpg")}
            ></Image>
             <Title style={style.eventTitle}>
              Planned Guilty Gear Event 2 
            </Title>
            <Button
                onPress = {() => navigation.navigate('Guilty Gear')}
                title = 'View'
                 />
          </Card>

          <Card>
            <Image
              style={style.image}
              source={require("../assets/blaze.jpg")}
            ></Image>
            <Title style={style.eventTitle}>
              Planned Blazeblue Event 3
            </Title>
            <Button
                onPress = {() => navigation.navigate('Blazeblue')}
                title = 'View'
                 />
          </Card>
        </Card>
        
  
       
      </ScrollView>
    );
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
  