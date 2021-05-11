import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, SafeAreaView, TextInput, Alert} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Dialog from "react-native-dialog";
import { useState } from "react";
import { User, UserButton } from "../components/user";
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Tournament, TournamentButton } from "../components/tournament";
import { useNavigation } from '@react-navigation/native';

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
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [checked, setChecked] = React.useState('first');
    const [game, setGame] = React.useState("");
    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [endMode, setEndMode] = useState('date');
    const [show, setShow] = useState(false);
    const [endShow, setEndShow] = useState(false);
    const [tName, setTName] = React.useState("");
    const [tDesc, setTdesc] = React.useState("");

    const options = ["Apple", "Banana", "Orange"];
    const [selected, setSelected] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const onEndChange = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setEndShow(Platform.OS === 'ios');
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

    const changeGame1 = () => {
        setGame("StreetFighter5");
    }

    const changeGame2 = () => {
        setGame("Tekken7");
    }

    const changeGame3 = () => {
        setGame("SSBU");
    }

    const changeGame4 = () => {
        setGame("UnderNightInBirth");
    }

    const changeGame5 = () => {
        setGame("GuiltyGearStrive");
    }

    const changeGame6 = () => {
        setGame("Blazeblue");
    }

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const endShowDatepicker = () => {
        endShowMode('date');
    };

    const endShowTimepicker = () => {
        endShowMode('time');
    };

    const showEventDialog = () => {
        setVisible1(true);
    };

    const showTournamentDialog = () => {
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

    function GoToButton({ screenName }) {
        const navigation = useNavigation();

        return (
            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => { window.events[window.eventID].deleteEvent(); navigation.navigate(screenName); }}>
                <Icon
                    name="trash-can-outline"
                    size={50}
                />

                </TouchableOpacity >
            </View>
        );
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
        inputs: {
            margin: 1,
            borderWidth: 1,
            flexDirection: 'column',
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

    var tournaments = [];
    for (let i = 0; i < window.events[window.eventID].tournaments.length; i++) {
        tournaments.push(
            <View>
                <View style={styles.separator} />
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <TournamentButton name={event.tournaments[i].name} img={event.tournaments[i].game} date={event.tournaments[i].date} endDate={event.tournaments[i].endDate} EID={event.tournaments[i].EID} TID={event.tournaments[i].TID} deleted={event.tournaments[i].deleted}>
                    </TournamentButton>
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
            <Text style={{ padding: 10, fontSize: 18}}>
                {event.startDate.toDateString()} - {event.endDate.toDateString()}
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
                    <ScrollView>
                    <Dialog.Title> Create New Tournament </Dialog.Title>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginLeft: 5 }}>

                            <List.Section title="Pick Game">
                                <List.Accordion
                                    title="Expand Game List"
                                        left={props => <List.Icon {...props} />}>
                                        <List.Item title="Street Fighter 5" value="Street Fighter 5" onPress={changeGame1} />
                                        <List.Item title="Tekken 7" value="Tekken 7" onPress={changeGame2} />
                                        <List.Item title="Super Smash Bros Ultimate" onPress={changeGame3}/>
                                        <List.Item title="Under Night In-Birth Exe:late cl-r" onPress={changeGame4}/>
                                        <List.Item title="Guilty Gear Strive" onPress={changeGame5}/>
                                        <List.Item title="Blazeblue Centralfiction" onPress={changeGame6} />
                                </List.Accordion>
                            </List.Section>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <Title style={styles.checkbox}>Online</Title>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <Title style={styles.checkbox}>Offline</Title>
                                </View>
                            </View>

                            <Title style={styles.moreInput}>Tournament Name</Title>
                            <SafeAreaView>
                                <TextInput
                                        style={styles.input}
                                        onChangeText={setTName}
                                    value={tName}
                                    placeholder=" Tournament Name"
                                />
                            </SafeAreaView>

                            <Title style={styles.moreInput}>Tournament Description</Title>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={setTdesc}
                                    value={tDesc}
                                    numberOfLines={4}
                                    multiline
                                    placeholder=" Description"
                                />
                            </SafeAreaView>

                            <Text style={styles.titles}>Starts</Text>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={showDatepicker}>
                                        <Icon
                                            name="calendar-blank"
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text>{date.getMonth() + 1}/{date.getDate()}</Text>
                                </View>
                                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={showTimepicker}>
                                        <Icon
                                            name="clock-outline"
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                    <Text>{date.getHours()}:{date.getMinutes()}</Text>
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
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={endShowDatepicker}>
                                            <Icon
                                                name="calendar"
                                                size={25}
                                            />
                                        </TouchableOpacity>
                                        <Text>{endDate.getMonth() + 1}/{endDate.getDate()}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                        <TouchableOpacity activeOpacity={0.5} onPress={endShowTimepicker}>
                                            <Icon
                                                name="clock"
                                                size={25}
                                            />
                                        </TouchableOpacity>
                                        <Text>{endDate.getHours()}:{endDate.getMinutes()}</Text>
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



                            <View style={{ paddingTop: 15 }}>
                                    <Button
                                        title="Confirm"
                                        color="#f194ff"
                                        onPress={() => {event.addTournament(tName, tDesc, date, endDate, game); console.log(event.tournaments)}}
                                />
                            </View>




                        </View>

                    </View>
                        <Dialog.Button label="Cancel" onPress={handleCancel} />
                    </ScrollView>
                    </Dialog.Container>
            </View>
            {tournaments}
            {/* 
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
            */}
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
            <GoToButton screenName="Current Events" />
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
