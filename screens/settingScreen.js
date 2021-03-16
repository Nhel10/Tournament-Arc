import React, { useState } from 'react';
import { Button, View, Text, TextInput, Switch } from 'react-native';
import { globalStyles } from '../styles/global';

;

export default function Settings({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

    const [value1, onChangeText1] = React.useState('Old Password');
    const [value2, onChangeText2] = React.useState('New Password');
    const [value3, onChangeText3] = React.useState('Old Email');
    const [value4, onChangeText4] = React.useState('New Email');
    const [value5, onChangeText5] = React.useState('Enter new username');
    const [value6, onChangeText6] = React.useState('Enter account password');
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
                Block Private Messages from non-friends:
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Enable auto-registration: 
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch4}
                    value={isEnabled4}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Disable two-factor authentication: 
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled5 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch5}
                    value={isEnabled5}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Disable sounds notifications: 
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled6 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch6}
                    value={isEnabled6}
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
            <Text style={globalStyles.pageText}>
                Change account email:
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText3(text)}
                    value={value3}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText4(text)}
                    value={value4}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Change account username:
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText5(text)}
                    value={value5}
                />
            </Text>
            <Text style={globalStyles.pageText}>
                Delete user account:
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText6(text)}
                    value={value6}
                />
            </Text>
        </View>
    )
}