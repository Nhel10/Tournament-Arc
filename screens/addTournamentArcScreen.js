import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { EventButton } from '../components/event';
import DropdownMenu from 'react-native-dropdown-menu';
import { globalStyles } from '../styles/global';
import CheckBox from '@react-native-community/checkbox';
import DialogBox from 'react-native-dialogbox';
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';

export default function addTournamentArc() {
 
    const [number, onChangeNumber] = React.useState(null);
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [checked, setChecked] = React.useState('first');

    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [endMode, setEndMode] = useState('date');
    const [show, setShow] = useState(false);
    const [endShow, setEndShow] = useState(false);
    const [eventName, setName] = React.useState("");

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

    return (
        <View style={{flex: 1}}>
            <View style={{marginLeft: 5}}>

            <List.Section title="Pick Game">
                <List.Accordion
                    title="Expand Game List"
                    left={props => <List.Icon {...props}  />}>
                    <List.Item title="Street Fighter 5" />
                    <List.Item title="Tekken 7" />
                    <List.Item title="Super Smash Bros Ultimate" />
                    <List.Item title="Under Night In-Birth Exe:late cl-r" />
                    <List.Item title="Guilty Gear Strive" />
                    <List.Item title="Blazeblue Centralfiction" />
                </List.Accordion>
                </List.Section>

            <View style = {{flexDirection: 'row'}}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <View style = {{marginLeft: 5}}>
                    <Title style={styles.checkbox}>Online</Title>
                    </View>
                </View>
            
            <View style = {{flexDirection: 'row'}}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <View style = {{marginLeft: 5}}>
                    <Title style={styles.checkbox}>Offline</Title>
                    </View>
                </View>

                <Title style={styles.moreInput}>Event Name</Title>
                <SafeAreaView>
                    <TextInput
                        style = {styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Team (optional)"
                    />
                    </SafeAreaView> 

                <Title style={styles.moreInput}>Event Description</Title>
                <SafeAreaView>
                    <TextInput
                        style = {styles.inputs}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Description"
                    />
                    </SafeAreaView>    

                <Text style={styles.titles}>Starts</Text>
                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row'  }}>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={showDatepicker}>
                        <Icon
                            name="calendar-blank"
                            size={25}
                        />
                        </TouchableOpacity>
                        <Text>{date.getMonth()+1}/{date.getDate()}</Text>
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

            <EventButton  name={eventName} date={date} endDate={endDate}>
            </EventButton>

            <View style = {{paddingTop: 15}}>
                <Button
                    title="Confirm"
                    color="#f194ff"
                    onPress={() => Alert.alert('Tournament Entered')}
                    />
            </View>

            </View>

            </View>

                    
                )
            }

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    moreInput: {
        fontSize: 13,
        marginTop: 10,
        fontWeight: 'bold',
    },

    checkbox: {
        fontSize: 13,
    },
    titles: {
        fontSize: 16,
        textAlign: 'center'
    },

    input: {
        height: 40,
        width: 300,
        margin: 1,
        borderWidth: 1,
        flexDirection: 'column',
      },
    
      inputs: {
        height: 100,
        width: 300,
        margin: 1,
        borderWidth: 1,
        flexDirection: 'column',
      },
});