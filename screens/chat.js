import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-paper";

export default function ReviewDetails({ navigation }) {
  var eventName = "Event Name";
  var eventDescription =
    "This is the event description. It will describe the purpose of the event and the tournaments that are organized around it.";

  const styles = StyleSheet.create({
    container: {
      paddingTop: 23,
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: "#304857",
      borderWidth: 2,
    },
    submitButton: {
      backgroundColor: "#304857",
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText: {
      textAlign: "center",
      color: "white",
    },
    scrollViewHolder: {
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderTopColor: "rgba(0,0,0,0.5)",
      borderBottomColor: "rgba(0,0,0,0.5)",
    },
    separator: {
      width: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    item: {
      color: "black",
      textAlign: "center",
    },
    tinyLogo: {
      width: 100,
      height: 60,
    },
  });

  return (
    <ScrollView>
      <View style={style.firstContainer}>
        <Text style={style.titles}>{eventName}</Text>
      </View>
      <Text style={{ padding: 10, fontSize: 18, color: "gray" }}>
        {eventDescription}
      </Text>
      <Text style={style.titles}>Tournaments</Text>
      <View style={styles.scrollViewHolder}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("../assets/lol.jpg")}
            />
            <Text style={styles.item}>Tournament 1</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("../assets/fornite.jpg")}
            />
            <Text style={styles.item}>Tournament 2</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("../assets/warzone.jpg")}
            />
            <Text style={styles.item}>Tournament 3</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("../assets/pubg.png")}
            />
            <Text style={styles.item}>Tournament 4</Text>
          </View>
          <View style={styles.separator} />
        </ScrollView>
      </View>
      <Text style={style.titles}>Players</Text>
      <View style={styles.scrollViewHolder}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/bienfu.png")} />
            <Text style={styles.item}>Player 1</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/mancake.png")} />
            <Text style={styles.item}>Player 2</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/pandra.png")} />
            <Text style={styles.item}>Player 3</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/dog.jpg")} />
            <Text style={styles.item}>Player 4</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image
              size={50}
              source={require("../assets/Orange-black-skull.jpg")}
            />
            <Text style={styles.item}>Player 5</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/monke.jpg")} />
            <Text style={styles.item}>Player 6</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/fornite.jpg")} />
            <Text style={styles.item}>Player 7</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/lol.jpg")} />
            <Text style={styles.item}>Player 8</Text>
          </View>
          <View style={styles.separator} />
        </ScrollView>
      </View>
      <Text style={style.titles}>Hosts and Co-hosts</Text>
      <View style={styles.scrollViewHolder}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/bienfu.png")} />
            <Text style={styles.item}>Host</Text>
            <Text style={styles.item}>Username</Text>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Avatar.Image size={50} source={require("../assets/mancake.png")} />
            <Text style={styles.item}>Co-Host</Text>
            <Text style={styles.item}>Username</Text>
          </View>
          <View style={styles.separator} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  firstContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  secondContainer: {
    paddingLeft: 5,
  },
  thirdContainer: {
    paddingLeft: 10,
  },
  fourthContainer: {
    paddingLeft: 10,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
