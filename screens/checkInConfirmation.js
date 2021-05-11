import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";

//Develop an interface for players to check in their competing bracket

export default function ReviewDetails({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 17 }}>
          <Text style={{ color: "red" }}> Check In Confirmation</Text>
        </Text>
      </Text>

      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 2 }}>
          <Text style={{ color: "blue" }}> </Text>
        </Text>
      </Text>

      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 15 }}>
          <Text style={{ color: "green" }}>
            {" "}
            Do you want to check in to event/tournament?
          </Text>
        </Text>
      </Text>

      <TextInput
        style={{ height: 40 }}
        placeholder="Enter check in confirmation"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />

      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 2 }}>
          <Text style={{ color: "blue" }}> </Text>
        </Text>
      </Text>

      <Button
        title="Check in"
        color="#ff6666"
        onPress={() => Alert.alert("You are now checked-in.")}
      />

      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 2 }}>
          <Text style={{ color: "blue" }}> </Text>
        </Text>
      </Text>

      <Button
        title="No, do not check in"
        color="#ffcc66"
        onPress={() => Alert.alert("You are not checked-in.")}
      />

      <Text style={globalStyles.pageText}>
        <Text style={{ fontSize: 2 }}>
          <Text style={{ color: "blue" }}> </Text>
        </Text>
      </Text>

      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1582801396492-705377f39876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80a",
        }}
      />
    </View>
  );
}
