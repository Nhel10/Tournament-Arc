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
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { block } from "react-native-reanimated";
import { SocialIcon } from "react-native-elements";

export default function Following({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <Card style={style.eventCard}>
        <Title style={style.headerTitle}>Games you follow</Title>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/night.jpg")}
          ></Image>
          <Title style={style.eventTitle}>
            Under Night In-Birth Exe:Late[st]
          </Title>
          <Button
            onPress={() => navigation.navigate("UNICLR Gateway")}
            title="View"
          />
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/guiltygear.jpg")}
          ></Image>
          <Title style={style.eventTitle}>Guilty Gear Strive</Title>
          <Button
            onPress={() => navigation.navigate("GGS Gateway")}
            title="View"
          />
        </Card>
      </Card>

      <Card style={style.eventCard}>
        <Title style={style.headerTitle}>Events You Follow</Title>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/evo.png")}
          ></Image>
          <Title style={style.eventTitle}>Evo</Title>
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/smash.jpg")}
          ></Image>
          <Title style={style.eventTitle}>Smash World Tour</Title>
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
