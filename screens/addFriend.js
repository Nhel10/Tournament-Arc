import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { User, UserButton } from "../components/user";
import Dialog from "react-native-dialog";

export default function AddFriend({ navigation }) {
  var event = window.events[window.eventID];
  const [visible, setVisible] = useState(false);
  const [playerName, onChangePlayerName] = React.useState("");

  var players = [];
  for (let i = 0; i < window.events[window.eventID].players.length; i++) {
    players.push(
      <View>
        <View style={styles.separator} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <UserButton
            username={event.players[i].username}
            img={event.players[i].image}
          ></UserButton>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }

  const showPlayerDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlePlayerAdd = () => {
    var hi = new User(playerName, "image0");
    event.addPlayer(hi);
    setVisible(false);
  };

  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}>
        <Text
          style={{
            fontSize: 30,
            marginRight: 10,
          }}
        >
          Friends List
        </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={showPlayerDialog}>
          <Icon2 name="group-add" size={28} />
        </TouchableOpacity>
      </View>
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Add Player</Dialog.Title>
          <Dialog.Input
            label="Player Username"
            value={playerName}
            onChangeText={onChangePlayerName}
          ></Dialog.Input>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Add" onPress={handlePlayerAdd} />
        </Dialog.Container>
        <View style={styles.scrollViewHolder}>
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <View>{players}</View>
             {/** Add online offline statuses? */}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  scrollViewHolder: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: "rgba(0,0,0,0.5)",
    borderBottomColor: "rgba(0,0,0,0.5)",
  },
});
