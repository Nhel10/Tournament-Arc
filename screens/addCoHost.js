import { SearchBar } from 'react-native-elements';
import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import DropDownPicker from 'react-native-dropdown-picker';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
    <View>
      <SearchBar
        placeholder="Search for user"
        onChangeText={this.updateSearch}
        value={search}
      />
       <ScrollView style={globalStyles.container}>
  
  <Card style={style.eventCard}>
    <Card> 
      <Title style={style.eventTitle}>
        Co-Host 1
      </Title>
      <DropDownPicker
        items={[]}
        placeholder = {['Enter Bracket']}
        /> 
        <Card.Actions>
            <Button>Remove Host</Button>
        </Card.Actions>
    </Card>

    <Card>
       <Title style={style.eventTitle}>
       Co-Host 2
      </Title>
      <DropDownPicker
        items={[]}
        placeholder = {['Enter Bracket']}
        />  
        <Card.Actions>
            <Button>Remove Host</Button>
        </Card.Actions>
    </Card>

    <Card>
      <Title style={style.eventTitle}>
      Co-Host 3
      </Title>
      <DropDownPicker
        items={[]}
        placeholder = {['Enter Bracket']}
        /> 
        <Card.Actions>
            <Button>Remove Host</Button>
        </Card.Actions>
    </Card>
  </Card>
  

 
</ScrollView>
    </View>
    );
  }
}
const style = StyleSheet.create({
    userCard: {
      flex: 1,
      flexDirection: "row",
    },
    socials: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    username: {
      fontWeight: "bold",
      fontSize: 20,
      paddingLeft: 10,
      paddingTop: 15,
    },
    eventCard: {
      marginTop: 15,
    },
    headerTitle: {
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 25,
      fontWeight: "bold"
    },
    image: {
      width: 415,
      height: 120,
      resizeMode: "stretch",
    },
    eventTitle: {
      fontSize: 15,
      paddingLeft: 10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 60,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
    },
  });
  