import React, { useState } from 'react';
import { Button, View, Text, TextInput, Switch } from 'react-native';
import { globalStyles } from '../styles/global';

;

export default function Settings({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [value1, onChangeText1] = React.useState('Old Password');
    const [value2, onChangeText2] = React.useState('New Password');
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-around',
        }}>
            <Text style={globalStyles.pageText}>
                Enable Dark Mode:
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Enable Account Privacy:
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Block Private Messages from strangers:
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Change account password:
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText1(text)}
                    value={value1}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText2(text)}
                    value={value2}
                />
            </Text>
        </View>
    )
}