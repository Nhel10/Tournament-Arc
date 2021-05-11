import React, { Component, useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import Dialog from "react-native-dialog";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { User, UserButton } from "../components/user";
import Images from '../index';

require("firebase/firestore");
require("firebase/firebase-storage");

export default function ProfileScreen({ navigation, props }) {
  // const {currentUser, userProfile} = props;
  // console.log({currentUser, userProfile})
  var user = window.users[window.userID];
  var defaultProfilePicture =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

  var userNameTemp = "johniscool123";
  var userLocationTemp = "Long Beach, California";
  var twitchLinkTemp = "";

  const [image, setImage] = React.useState(defaultProfilePicture);
  const [userName, setUserName] = React.useState(user.username);
  const [userLocation, setLocation] = React.useState(userLocationTemp);
  const [twitchLink, setTwitchLink] = React.useState(twitchLinkTemp);
  const [visible, setVisible] = useState(false);
  const [eventVisible, setEventVisible] = useState(false);
  const [name, onChangeUserName] = React.useState(user.username);
  const [location, onChangeLocation] = React.useState(userLocationTemp);
  const [twitch, onChangeTwitch] = React.useState(twitchLinkTemp);

  const saveProfileData = () => {
    firebase
      .firestore()
      .collection("userProfile")
      .doc(firebase.auth().currentUser.uid)
      .set({
        name,
        location,
        twitch,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const uploadImage = async () => {
  //   const uri = props.route.params.image;
  //   const childPath = `post/${
  //     firebase.auth().currentUser.uid
  //   }/${Math.random().toString(36)}`;
  //   console.log(childPath);

  //   const response = await fetch(uri);
  //   const blob = await response.blob();

  //   const task = firebase.storage().ref().child(childPath).put(blob);

  //   const taskProgress = (snapshot) => {
  //     console.log(`transferred: ${snapshot.bytesTransferred}`);
  //   };

  //   const taskCompleted = () => {
  //     task.snapshot.ref.getDownloadURL().then((snapshot) => {
  //       console.log(snapshot);
  //     });
  //   };

  //   const taskError = (snapshot) => {
  //     console.log(snapshot);
  //   };

  //   task.on("state_changed", taskProgress, taskError, taskCompleted);
  // };

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const showEditDialog = () => {
    setVisible(true);
  };

  const showEventDialog = () => {
    setEventVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleEventClose = () => {
    setEventVisible(false);
  };

  const handleProfileSave = () => {
    setUserName(name);
    setLocation(location);
    setTwitchLink(twitch);
    saveProfileData();
    setVisible(false);
  };

  var temp;
  if(user.UID == 0){
    temp = {uri : image}
  }
  else{
    temp = Images[user.image]
  }

  return (
    <View>
      {/* Card with profile picuture, username, location, and twitch. */}
      <Card style={styles.cardLocation}>
        <View style={{ flexDirection: "row" }}>
          {/* Image picker */}
          <View style={{ marginTop: 10, alignItems: "center" }}>
            {image && (
              <Image
                source={temp}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            )}

            <Button
              title="+"
              onPress={pickImage}
              style={{
                backgroundColor: "gray",
                borderRadius: 50,
                height: 30,
                width: 30,
                position: "absolute",
              }}
            ></Button>
          </View>
          <View
            style={{ flexDirection: "column", marginLeft: 10, marginTop: 10 }}
          >
            <Title>{user.username}</Title>
            <Paragraph>{userLocation}</Paragraph>
            <TouchableOpacity
              style={{ width: 25 }}
              onPress={() => Linking.openURL(`https://twitch.tv/${twitchLink}`)}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/twitch.png")}
              />
            </TouchableOpacity>
          </View>
          {/* Edit Button */}
          <View>
            <TouchableOpacity
              style={{ marginLeft: 100, marginTop: 15 }}
              activeOpacity={0.5}
              onPress={showEditDialog}
            >
              <Text style={{ color: "#1e90ff" }}>Edit</Text>
            </TouchableOpacity>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Edit User Profile</Dialog.Title>
              <Dialog.Input
                label="Username"
                value={name}
                onChangeText={onChangeUserName}
              ></Dialog.Input>
              <Dialog.Input
                label="Location"
                value={location}
                onChangeText={onChangeLocation}
              ></Dialog.Input>
              <Dialog.Input
                label="Twitch Name"
                value={twitch}
                onChangeText={onChangeTwitch}
              ></Dialog.Input>
              <Dialog.Button label="Cancel" onPress={handleCancel} />
              <Dialog.Button label="Save" onPress={handleProfileSave} />
            </Dialog.Container>
          </View>
        </View>
      </Card>
      <View>
        <Title style={{ marginLeft: 10, marginTop: 10, fontSize: 25 }}>
          Attended Events
        </Title>
      </View>
      <View>
        <TouchableOpacity onPress={showEventDialog}>
          <Image
            style={{
              height: 150,
              width: 415,
              marginTop: 10,
              resizeMode: "stretch",
              borderRadius: 20,
            }}
            source={require("../assets/lol2020.png")}
          ></Image>
          <Text style={styles.textStyle}>
            League of Legends World Championship 2020
          </Text>
          <Dialog.Container visible={eventVisible}>
            <Image
              style={{
                height: 150,
                width: 350,
                resizeMode: "stretch",
                borderRadius: 20,
                alignItems: "center",
              }}
              source={require("../assets/lol2020.png")}
            ></Image>
            <Text
              style={{
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 15,
                borderBottomWidth: 0.5,
                alignItems: "center",
              }}
            >
              League of Legends World Championship 2020
            </Text>
            <View style={{ flexDirection: "column", marginTop: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="calendar" size={26} />
                <Text>April 1st, 2020 - April 20th, 2020</Text>
              </View>
              <Text style>League of Legends</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <MaterialCommunityIcons name="account-multiple" size={26} />
                <Text>323 Attendees</Text>
              </View>
              <Text
                style={{
                  backgroundColor: "#3ddb1f",
                  width: 65,
                  borderRadius: 50,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Finished
              </Text>
            </View>
            <Dialog.Button label="Close" onPress={handleEventClose} />
          </Dialog.Container>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

// const mapStateToProps = (store) => ({
//   currentUser: store.userState.currentUser,
//   userProfile: store.userState.userProfile,
// })
// export default connect(mapStateToProps, null)(ProfileScreen);
