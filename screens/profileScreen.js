import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

class ProfileScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        {/* Card with profile picuture, username, location, and twitch. */}
        <Card style={styles.cardLocation}>
          <View style={{ flexDirection: "row" }}>
            <Avatar.Image
              style={styles.avatar}
              size={96}
              source={require("../assets/bienfu.png")}
            />
            <View
              style={{ flexDirection: "column", marginLeft: 10, marginTop: 10 }}
            >
              <Title>johniscool123</Title>
              <Paragraph>Long Beach, California</Paragraph>
              <Paragraph>xQc</Paragraph>
            </View>
            <View>
              <TouchableOpacity
                style={{ marginLeft: 100, marginTop: 15,  }}
                activeOpacity={0.5}
              >
                <Text style={{color: "#1e90ff"}}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        {/* This is where the modal (pop-up) functionality modified. */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          {/* Components in the modal. */}
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* The button/event the user presses on to open the modal. */}
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Image
            style={{
              height: 150,
              width: 350,
              resizeMode: "stretch",
              borderRadius: 20,
            }}
            source={require("../assets/lol2020.png")}
          ></Image>
          <Text style={styles.textStyle}>
            League of Legends World Championship 2020
          </Text>
        </Pressable>
      </View>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
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
  eventButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  avatar: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  editButton: {},
  cardLocation: {
    marginTop: 25,
  },
});
