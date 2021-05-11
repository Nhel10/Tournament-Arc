import React from "react";
import { Button, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageText}>Create Tournament Page</Text>

      <Text style={globalStyles.pageText}></Text>

      <Text style={globalStyles.pageText}>Madden Brawl!</Text>

      <Text style={globalStyles.pageText}></Text>

      <Text style={globalStyles.pageText}>
        Attendees: John Quach, John So, Ryan Shannon, Louie Yonzon, Richie Ear
      </Text>

      <Text style={globalStyles.pageText}></Text>

      <Text style={globalStyles.pageText}>
        Rules: No third parties allowed, no cheating.
      </Text>

      <Text style={globalStyles.pageText}></Text>

      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri:
            "https://target.scene7.com/is/image/Target/GUEST_72ceea49-d203-410b-91d7-07905f4d758f?wid=488&hei=488&fmt=pjpeg",
        }}
      />
    </View>
  );
}
