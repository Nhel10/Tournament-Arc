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
import { connect } from 'react-redux'

require("firebase/firestore");
require("firebase/firebase-storage");

export default function ProfileScreen({ navigation, props }) {
  // const {currentUser, userProfile} = props;
  // console.log({currentUser, userProfile})
  var defaultProfilePicture =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

  var userNameTemp = "johniscool123";
  var userLocationTemp = "Long Beach, California";
  var twitchLinkTemp = "";

  const [image, setImage] = React.useState(defaultProfilePicture);
  const [userName, setUserName] = React.useState(userNameTemp);
  const [userLocation, setLocation] = React.useState(userLocationTemp);
  const [twitchLink, setTwitchLink] = React.useState(twitchLinkTemp);
  const [visible, setVisible] = useState(false);
  const [name, onChangeUserName] = React.useState("");
  const [location, onChangeLocation] = React.useState("");
  const [twitch, onChangeTwitch] = React.useState("");

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

  const handleCancel = () => {
    setVisible(false);
  };

  const handleProfileSave = () => {
    setUserName(name);
    setLocation(location);
    setTwitchLink(twitch);
    saveProfileData()
    setVisible(false);
  };

  return (
    <View>
      {/* Card with profile picuture, username, location, and twitch. */}
      <Card style={styles.cardLocation}>
        <View style={{ flexDirection: "row" }}>
          {/* Image picker */}
          <View style={{ marginTop: 10, alignItems: "center" }}>
            {image && (
              <Image
                source={{ uri: image }}
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
            <Title>{userName}</Title>
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
