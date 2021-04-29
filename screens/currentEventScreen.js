import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Dialog from "react-native-dialog";
import { useState } from "react";
import { User, UserButton } from "../components/user";

export default function CurrentEventScreen({ navigation }) {
    var event = window.events[window.eventID];
    var eventNameTemp = "Event Name";
    var eventDescriptionTemp = "This is the event description. It will describe the purpose of the event and the tournaments that are organized around it.";
    const [eventName, setName] = React.useState(event.name);
    const [eventDescription, setDescription] = React.useState(event.desc);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [name, onChangeName] = React.useState(event.name);
    const [desc, onChangeDesc] = React.useState(event.desc);
    const [playerName, onChangePlayerName] = React.useState("")
    const [cohostName, onChangeCohostName] = React.useState("");

    const showEventDialog = () => {
        setVisible1(true);
    };

    showTournamentDialog = () => {
        setVisible2(true);
    }

    const showPlayerDialog = () => {
        setVisible3(true);
    };

    const showCohostDialog = () => {
        setVisible4(true);
    };

    const handleCancel = () => {
        onChangeName(eventName);
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
    };

    const handleEventSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        setName(name);
        setDescription(desc);
        event.name = name;
        event.desc = desc;
        console.log(window.events[window.eventID].name);
        setVisible1(false);
    };

    const handlePlayerAdd = () => {
        var hi = new User(playerName, "image0");
        event.addPlayer(hi);
        setVisible3(false);
    }

    const handleCohostAdd = () => {
        var hi = new User(cohostName, "image0");
        event.addCohost(hi);
        setVisible4(false);
    }

    const styles = StyleSheet.create({
        container: {
            paddingTop: 23
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#304857',
            borderWidth: 2
        },
        submitButton: {
            backgroundColor: '#304857',
            padding: 10,
            margin: 15,
            height: 40,
        },
        submitButtonText: {
            textAlign: 'center',
            color: 'white'
        },
        scrollViewHolder:
        {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: 'rgba(0,0,0,0.5)',
            borderBottomColor: 'rgba(0,0,0,0.5)'
        },
        separator:
        {
            width: 1,
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        item:
        {
            color: 'black',
            textAlign: 'center'
        },
        tinyLogo: {
            width: 100,
            height: 60,
        },
    })

    var players = [];
    for (let i = 0; i < window.events[window.eventID].players.length; i++) {
        players.push(
            <View>
                <View style={styles.separator} />
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <UserButton username={event.players[i].username} img={event.players[i].image}>
                </UserButton>
            </View>
            <View style={styles.separator} />
            </View>
        )
    }

    var hosts = [];
    hosts.push(
        <View>
        <View style={styles.separator} />
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <UserButton username={event.host.username} img={event.host.image}>
            </UserButton>
        </View>
        <View style={styles.separator} />
    </View>)
    for (let i = 0; i < event.cohosts.length; i++) {
        hosts.push(
            <View>
                <View style={styles.separator} />
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <UserButton username={event.cohosts[i].username} img={event.cohosts[i].image}>
                    </UserButton>
                </View>
                <View style={styles.separator} />
            </View>
        )
    }

    return (
        
        <ScrollView>
            <View style={style.firstContainer}>
                <Text style={style.titles}>
                    {eventName}
                </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={showEventDialog}>
                    <Icon
                        name="square-edit-outline"
                        size={25}
                    />
                </TouchableOpacity>
                <Dialog.Container visible={visible1}>
                    <Dialog.Title>Edit Event Details</Dialog.Title>
                    <Dialog.Input label="Event Name" value={name} onChangeText={onChangeName}></Dialog.Input>
                    <Dialog.Input label="Event Description" numberOfLines={4} multiline value={desc} onChangeText={onChangeDesc}></Dialog.Input>
                    <Dialog.Button label="Cancel" onPress={handleCancel} />
                    <Dialog.Button label="Save" onPress={handleEventSave} />
                </Dialog.Container>
            </View>
                <Text style={{padding: 10, fontSize:18, color: 'gray'}}>
                    {eventDescription}
            </Text>
            <View style={style.firstContainer}>
                <Text style={style.titles}>Tournaments </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={showTournamentDialog}>
                    <Icon
                        name="tournament"
                        size={25}
                    />
                </TouchableOpacity>
                <Dialog.Container visible={visible2}>
                    <Dialog.Title> Create New Tournament </Dialog.Title>
                    <Dialog.Input label="Tournament Name" value={name} onChangeText={onChangeName}></Dialog.Input>
                    <Dialog.Input label="Tournament Description" numberOfLines={4} multiline value={desc} onChangeText={onChangeDesc}></Dialog.Input>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text> Start </Text>
                        <Icon
                        name="calendar-blank"
                        size={25}
                        />
                        <Icon
                        name="clock-outline"
                        size={25}
                        />
                    </View>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text> End </Text>
                        <Icon
                            name="calendar"
                            size={25}
                        />
                        <Icon
                            name="clock"
                            size={25}
                        />
                    </View>
                    <Dialog.Button label="Cancel" onPress={handleCancel} />
                    <Dialog.Button label="Save" onPress={handleEventSave} />
                </Dialog.Container>
            </View>
            <View style={styles.scrollViewHolder}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/lol.jpg')}
                        />
                        <Text style={styles.item}>Tournament 1</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/fornite.jpg')}
                        />
                        <Text style={styles.item}>Tournament 2</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/warzone.jpg')}
                        />
                        <Text style={styles.item}>Tournament 3</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/pubg.png')}
                        />
                        <Text style={styles.item}>Tournament 4</Text>
                    </View>
                    <View style={styles.separator} />
                </ScrollView>
                <Button 
                onPress = {() => navigation.navigate('Register')}
                title = 'Register'
                 />
            </View>
            <View style={style.firstContainer}>
                <Text style={style.titles}>Players </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={showPlayerDialog}>
                    <Icon2
                        name="group-add"
                        size={28}
                    />
                </TouchableOpacity>
            </View>
            <Dialog.Container visible={visible3}>
                <Dialog.Title>Add Player</Dialog.Title>
                <Dialog.Input label="Player Username" value={playerName} onChangeText={onChangePlayerName}></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Add" onPress={handlePlayerAdd} />
            </Dialog.Container>
            <View style={styles.scrollViewHolder}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {players}
                </ScrollView>
            </View>
            <View style={style.firstContainer}>
                <Text style={style.titles}>Hosts and Co-hosts </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={showCohostDialog}>
                    <Icon2
                        name="person-add"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <Dialog.Container visible={visible4}>
                <Dialog.Title>Add Co-host</Dialog.Title>
                <Dialog.Input label="Co-Host Username" value={cohostName} onChangeText={onChangeCohostName}></Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Add" onPress={handleCohostAdd} />
            </Dialog.Container>
            <View style={styles.scrollViewHolder}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {hosts}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    firstContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
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
        textAlign: 'center'
    },
});