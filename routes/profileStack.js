import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Profile() {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

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
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}
            >
              <View style={style.locationpin}>
                <Image
                  style={style.socials}
                  source={require("../assets/pin.png")}
                ></Image>
                <Paragraph style={style.location}>
                  Long Beach, California
                </Paragraph>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}
            >
              <Image
                style={style.socials}
                source={require("../assets/twitch.png")}
              ></Image>
            </View>
            <SafeAreaView>
              <View>
                <TouchableOpacity activeOpacity={0.5} style={style.editButton}>
                  <Image
                    style={style.socials}
                    source={require("../assets/edit.png")}
                  ></Image>
                  <Text style={style.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
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
    position: "relative",
    bottom: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 15,
  },
  eventCard: {
    marginTop: 30,
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
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 5,
  },
  locationpin: {
    position: "relative",
    left: -5,
    bottom: -20,
  },
  location: {
    position: "relative",
    left: 30,
    bottom: 40,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButtonText: {
    marginBottom: 25,
    marginLeft: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
