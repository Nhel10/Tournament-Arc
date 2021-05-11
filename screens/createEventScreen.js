import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Event, EventButton } from "../components/event";
import { UserButton } from "../components/user";
import { Avatar } from "react-native-paper";

export default function CreateEventScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [endMode, setEndMode] = useState("date");
  const [show, setShow] = useState(false);
  const [endShow, setEndShow] = useState(false);
  const [eventName, setName] = React.useState("");
  const [eventDesc, setDesc] = React.useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setEndShow(Platform.OS === "ios");
    setEndDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const endShowMode = (currentMode) => {
    setEndShow(true);
    setEndMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const endShowDatepicker = () => {
    endShowMode("date");
  };

  const endShowTimepicker = () => {
    endShowMode("time");
  };

  function GoToButton({ screenName }) {
    const navigation = useNavigation();

    return (
      <Button
        color="#304857"
        title={`CREATE`}
        padding={10}
        margin={15}
        height={40}
        onPress={() => {
          new Event(eventName, eventDesc, date, endDate, window.users[0]),
            console.log(window.events);
          navigation.navigate(screenName);
        }}
      />
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
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
    text: {
      color: "red",
      paddingLeft: 15,
    },
    titles: {
      fontSize: 16,
      textAlign: "center",
    },
    separator: {
      padding: 5,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderTopColor: "rgba(0,0,0,0.5)",
      borderBottomColor: "rgba(0,0,0,0.5)",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Event Name"
        placeholderTextColor="#304857"
        autoCapitalize="none"
        //onChangeText={this.handleEmail}
        value={eventName}
        onChangeText={setName}
        maxLength={50}
        textAlign="center"
        //value={this.state.email}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="A Short Description"
        placeholderTextColor="#304857"
        autoCapitalize="none"
        value={eventDesc}
        //onChangeText={this.handleUsername}
        onChangeText={setDesc}
        maxLength={1000}
        textAlign="center"
        //value={this.state.username}
      />
      <Text style={styles.titles}>Starts</Text>
      <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
        <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.5} onPress={showDatepicker}>
            <Icon name="calendar-blank" size={25} />
          </TouchableOpacity>
          <Text>
            {date.getMonth() + 1}/{date.getDate()}
          </Text>
        </View>
        <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.5} onPress={showTimepicker}>
            <Icon name="clock-outline" size={25} />
          </TouchableOpacity>
          <Text>
            {date.getHours()}:{date.getMinutes()}
          </Text>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.titles}>Ends</Text>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View
            style={{ justifyContent: "space-evenly", flexDirection: "row" }}
          >
            <TouchableOpacity activeOpacity={0.5} onPress={endShowDatepicker}>
              <Icon name="calendar" size={25} />
            </TouchableOpacity>
            <Text>
              {endDate.getMonth() + 1}/{endDate.getDate()}
            </Text>
          </View>
          <View
            style={{ justifyContent: "space-evenly", flexDirection: "row" }}
          >
            <TouchableOpacity activeOpacity={0.5} onPress={endShowTimepicker}>
              <Icon name="clock" size={25} />
            </TouchableOpacity>
            <Text>
              {endDate.getHours()}:{endDate.getMinutes()}
            </Text>
          </View>
        </View>
      </View>

      {endShow && (
        <DateTimePicker
          testID="endDateTimePicker"
          value={endDate}
          mode={endMode}
          is24Hour={true}
          display="default"
          onChange={onEndChange}
        />
      )}

      <GoToButton screenName="Current Events" />
    </View>
  );
}
