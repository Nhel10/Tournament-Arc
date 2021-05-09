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
  Modal,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export default class CoHostCheckInScreen extends Component {
  state = {
    toggle: false,
  };

  constructor(props) {
    super(props)
    this.state = {unqCode:''};
    this.state = {showMe: false};
    this.state = {modalVisible: false};
  }

  _onPress = () => {
    const newState = !this.state.toggle;
    this.setState({
      toggle: newState,
    });
  };

  _renderVisible = () => {
    this.setState({ showMe : !this.state.showMe });
  };

  _showModal = () => {
    this.setState({modalVisible : !this.state.modalVisible});
    // return (
    //   <View>
    //     <Modal>
    //       <View>
    //         <Text>
    //           Tournament Alert
    //         </Text>
    //       </View>
    //       <View>
    //         <Text>
    //           Please check-in to tournament!!!
    //         </Text>
    //       </View>
    //     </Modal>
    //   </View>
    // )
  }

  render() {
    const { toggle } = this.state;
    const textValue = toggle ? "Check-In" : "Done";
    const buttonBg = toggle ? "#30b9e3" : "#27cc4d";
    const marginText = toggle ? 80 : 90;
    //console.log(this.state.unqCode);
    return (
      <View>
        <Card>
          <View style={{ flexDirection: "row" }}>
            {
              this.state.modalVisible?
              <Modal>
                <View style={styles.centeredView}>
                  <Text>
                    Tournament Alert
                  </Text>
                </View>
                <View style={styles.centeredView}>
                  <Text>
                    Please check-in to tournament!!!
                  </Text>
                  <Pressable
                    style={styles.button}
                    onPress={() => this._showModal()}
                  >
                    <Text style={styles.textStyle}>Close notification</Text>
                  </Pressable>
                </View>
              </Modal> : null
            }
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
                <Text>
                  Use code 1234 as a test
                </Text>
                <TextInput
                  placeholder = "Enter custom code"
                  onChangeText = {unqCode=>this.setState({unqCode})}
                />
                {/*Must navigate from drawer level first then work way down*/}
                <Button
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {this.props.navigation.navigate('Competitor Gateway', {
                    screen: 'Competitor Interface', 
                    params: {
                      screen: 'CheckIn', 
                      params: { 
                        P1: this.state.unqCode, }}}), 
                  this._renderVisible(),
                  this._showModal()}}
                  title="Send code to competitors"
                />
                {/* <Text>
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
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </Card>
        <Card
          style={{
            marginTop: 1,
            alignItems: "center",
            height: 50,
          }}
        >
          <View style={{
            flexDirection: "row",
          }}>
            <Text>Approve code: </Text>
            {
              this.state.showMe?
              <Text>
                1234
              </Text> : null
            }
          </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});