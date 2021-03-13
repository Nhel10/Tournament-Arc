import React from "react";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { block } from "react-native-reanimated";
import { SocialIcon } from "react-native-elements";

export default function Profile() {
  return (
    <ScrollView style={globalStyles.container}>
      <Card style={style.eventCard}>
        <View style={style.userCard}>
          <Image
            style={style.avatar}
            source={require("../assets/bienfu.png")}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Paragraph style={style.username}>johniscool123</Paragraph>
            <View style={{flexDirection: "row", marginLeft: 10, marginTop: 5}}>
              <Image
                style={style.socials}
                source={require("../assets/twitch.png")}
              ></Image>
              <Image
                style={style.socials}
                source={require("../assets/discord.png")}
              ></Image>
              <Image
                style={style.socials}
                source={require("../assets/twitter.png")}
              ></Image>
            </View>
          </View>
        </View>
      </Card>

      <Card style={style.eventCard}>
        <Title style={style.headerTitle}>Upcoming Events</Title>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/intel.jpg")}
          ></Image>
          <Title style={style.eventTitle}>
            Intel Extreme Masters Katowice 2020
          </Title>
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/lol2020.png")}
          ></Image>
          <Title style={style.eventTitle}>
            2020 League of Legends World Championship
          </Title>
        </Card>
      </Card>

      <Card style={style.eventCard}>
        <Title style={style.headerTitle}>Past Events</Title>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/dota2019.png")}
          ></Image>
          <Title style={style.eventTitle}>
            The International Dota 2 Championship 2019
          </Title>
        </Card>
        <Card>
          <Image
            style={style.image}
            source={require("../assets/fortnite.jpg")}
          ></Image>
          <Title style={style.eventTitle}>Fortnite World Cup 2019</Title>
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
