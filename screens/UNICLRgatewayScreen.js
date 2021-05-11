import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Card, Title, Paragraph, Icon } from "react-native-paper";

export default function UNICLRgatewayScreen({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <Card style={style.eventCard}>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/night.jpg")}
          ></Image>
          <Title style={style.eventTitle}>
            Beginner Friendly Online Tournament
          </Title>
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/beachcon.png")}
          ></Image>
          <Title style={style.eventTitle}>CSULB Beach Con FGC Tournament</Title>
          <Button
            onPress={() => navigation.navigate("Mock UNICLR Event")}
            title="View"
          />
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/club.png")}
          ></Image>
          <Title style={style.eventTitle}>
            Anime Club Anime Fighters Tournament
          </Title>
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
    fontWeight: "bold",
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
