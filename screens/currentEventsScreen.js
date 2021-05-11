import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Event, EventButton } from "../components/event";
export default function currentEventsScreen() {
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

  const [eventsView, updateEventsView] = React.useState([]);
  console.log(window.events.length);

  const handleUpdate = () => {
    var eventList = [];
    for (let i = 0; i < window.events.length; i++) {
      eventList.push(
        <View>
          <View style={styles.separator} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <EventButton
              name={window.events[i].name}
              date={window.events[i].startDate}
              endDate={window.events[i].endDate}
              EID={i}
              deleted={window.events[i].deleted}
            ></EventButton>
          </View>
          <View style={styles.separator} />
        </View>
      );
    }
    updateEventsView(eventList);
    console.log("hello?");
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={handleUpdate}>
          <Icon style={{ padding: 10 }} name="refresh" size={25} />
        </TouchableOpacity>
        {eventsView}
      </View>
    </ScrollView>
  );
}
