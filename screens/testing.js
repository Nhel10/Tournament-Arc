import React, { useState } from "react";
import { Button, View, Text, Image, TextInput, Switch } from "react-native";
import { globalStyles } from "../styles/global";

//Develop an interface for Co-Host or Host to keep track of competitors who checked in

export default function ReviewDetails({ navigation }) {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <Image
        style={{
          flex: 1,
          width: 50,
          height: 50,
        }}
        source={{
          uri:
            "https://images.smash.gg/images/user/163050/image-b1d42b0b238af2b6302848a5ffdeebef.png",
        }}
      />
      <Text style={{ position: "absolute", fontSize: 40 }}>Brad Pitt</Text>
    </View>
  );
}
