import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReviewDetails({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [endMode, setEndMode] = useState('date');
    const [show, setShow] = useState(false);
    const [endShow, setEndShow] = useState(false);

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

    function GoToButton({ screenName }) {
        const navigation = useNavigation();

        return (
            <Button
                color='#304857'
                title={`CREATE`}
                padding={10}
                margin={15}
                height={40}
                onPress={() => navigation.navigate(screenName)}
            />
        );
    }

    const styles = StyleSheet.create({
        container: {
            paddingTop: 20
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
        text: {
            color: 'red',
            paddingLeft: 15
        },
        titles: {
            fontSize: 16,
            textAlign: 'center'
        },
        separator:
        {
            padding: 5,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: 'rgba(0,0,0,0.5)',
            borderBottomColor: 'rgba(0,0,0,0.5)'
        },
    })

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Event Name"
                placeholderTextColor="#304857"
                autoCapitalize="none"
                //onChangeText={this.handleEmail}
                maxLength={50}
                textAlign="center"
                //value={this.state.email}
            />

            <TextInput style={ styles.input }
                underlineColorAndroid="transparent"
                placeholder="Description"
                placeholderTextColor="#304857"
                autoCapitalize="none"
                //onChangeText={this.handleUsername}
                maxLength={200}
                textAlign="center"
                //value={this.state.username}
            />
            <Text style={styles.titles}>Starts</Text>
            <View style={styles.separator}>
                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row'  }}>
                    <Button
                        width={25}
                        onPress={showDatepicker} title="Start Date" />
                    <Button
                        width={25}
                        onPress={showTimepicker} title="Start Time" />
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
            <View style={styles.separator}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button
                        width={25}
                        onPress={endShowDatepicker} title="End Date" />
                    <Button
                        width={25}
                        onPress={endShowTimepicker} title="End Time" />
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


            <GoToButton screenName="Chat" />

        </View>
    )
}
