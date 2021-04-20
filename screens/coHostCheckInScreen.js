import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export default class CompetitorCheckIn extends Component {
  state = {
    toggle: false,
  };

  _onPress = () => {
    const newState = !this.state.toggle;
    this.setState({
      toggle: newState,
    });
  };

  render() {
    const { toggle } = this.state;
    const textValue = toggle ? "Check-In" : "Done";
    const buttonBg = toggle ? "#30b9e3" : "#27cc4d";
    const marginText = toggle ? 80 : 90;
    return (
      <View>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10,
                width: 140,
                height: 140,
              }}
              source={require("../assets/undernight.jpg")}
            ></Image>
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Title style={{ fontSize: 14 }}>
                Planned Under Night Event 1
              </Title>
              <Paragraph style={{ color: "gray", fontSize: 10 }}>
                Bracket 2
              </Paragraph>
              <Paragraph style={{ color: "gray", fontSize: 10 }}>
                Under Night In-Birth EXE: Late [cl-r]
              </Paragraph>
              <Paragraph style={{ color: "gray", fontSize: 10 }}>
                May 19th, 2021
              </Paragraph>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => this._onPress()}
                  style={{
                    marginBottom: 10,
                    marginTop: 5,
                    flex: 1,
                    height: 15,
                    width: 220,
                    backgroundColor: buttonBg,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color: "white", marginLeft: marginText}}>{textValue}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  green: {
    backgroundColor: "green",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});