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
  TextInput,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export default class CoHostCheckInScreen extends Component {
  state = {
    toggle: false,
  };

  constructor(props) {
    super(props)
    this.state = {unqCode:''};
  }

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
                height: 160,
              }}
              source={require("../assets/smash.jpg")} //../assets/undernight.jpg
              //Planned Under Night Event 1
              //Bracket 2
              //Under Night In-Birth EXE: Late [cl-r]
              //May 19th, 2021
            ></Image>
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Title style={{ fontSize: 14 }}>
                Super Smash Bros World Tour 2020 
              </Title> 
              {/* <Paragraph style={{ color: "gray", fontSize: 10 }}> 
                Singles 
              </Paragraph> 
              <Paragraph style={{ color: "gray", fontSize: 10 }}>
                Super Smash Bros. Ultimate 
              </Paragraph> */}
              <Text style={{ color: "gray", fontSize: 10 }}>
                April 18th, 2021 @7:00 PDT 
              </Text>
              <View style={styles.buttonContainer}>
                <TextInput
                  placeholder = "Enter custom code"
                  onChangeText = {unqCode=>this.setState({unqCode})}
                />
                {/*Must navigate from drawer level first then work way down*/}
                <Button
                  onPress={() => this.props.navigation.navigate('Competitor Gateway', 
                    {screen: 'Competitor Interface', params: 
                    {screen: 'CheckIn', params: this.state.unqCode}})}
                  title="Send code to competitors"
                />
                <Text>
                  Approve code: 
                </Text>
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