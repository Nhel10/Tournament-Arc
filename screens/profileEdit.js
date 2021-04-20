import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { globalStyles } from "../styles/global";
import { TextInput } from "react-native-paper";

export default function ProfileEdit() {
  const [userNameText, setText] = React.useState("");
  const [locationText, setText2] = React.useState("");
  const [twitchText, setText3] = React.useState("");

  return (
    <View>
      {/* This is where the exit button and the save button is located. */}
      <View>
        <Card style={{ height: 80 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={style.exitButton} activeOpacity={0.5}>
              <Image source={require("../assets/close.png")}></Image>
            </TouchableOpacity>
            <Title style={style.editTitle}>Edit Profile</Title>
            <TouchableOpacity style={style.saveButton} activeOpacity={0.5}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      {/* This is for the avatar for the user, still need to add changing photos. */}
      <View style={style.avatarPosition}>
        <Avatar.Image size={100} source={require("../assets/bienfu.png")} />
      </View>
      
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={style.textArea}
          label="Username"
          value={userNameText}
          onChangeText={(userNameText) => setText(userNameText)}
        ></TextInput>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={style.textArea}
          label="Location"
          value={locationText}
          onChangeText={(locationText) => setText2(locationText)}
        ></TextInput>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={style.textArea}
          label="Twitch URL"
          value={twitchText}
          onChangeText={(twitchText) => setText3(twitchText)}
        ></TextInput>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  exitButton: {
    position: "relative",
    top: 40,
    left: 20,
  },
  editTitle: {
    position: "relative",
    top: 35,
    left: 130,
  },
  saveButton: {
    position: "relative",
    top: 45,
    left: 240,
    fontWeight: "bold",
  },
  textArea: {
    marginTop: 10,
    width: 400,
  },
  avatarPosition : {
    marginTop: 10,
    alignItems: "center"
  }
});
