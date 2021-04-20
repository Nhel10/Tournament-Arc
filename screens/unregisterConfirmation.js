import React, { useState } from 'react';
import { Button, View, Text, Image, TextInput, Switch} from 'react-native';
import { globalStyles } from '../styles/global';

// Develop an interface for users to unregsiter from an Event or Bracket

export default function ReviewDetails({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: 'green' }}> Unregisteration from Event/Tournament</Text></Text></Text>

            <Text style={globalStyles.pageText}></Text>


            <Text style={globalStyles.pageText}> Are you sure unregister from this event/tournament?</Text>

            <Text style={globalStyles.pageText}>
                <Switch
                    trackColor={{ false: "#fad3aa", true: "#7fc8c9" }}
                    thumbColor={isEnabled1 ? "#000000" : "#000000"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </Text>
            
            <Image style={{ width: 400, height: 300}} source={{uri: 'https://cdn.vox-cdn.com/thumbor/YZJgSAOkS1GJtUhmonX3d460Dz8=/0x51:500x332/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/36992002/tumblr_lmwsamrrxT1qagx30.0.0.gif'}}/>

            <Text style={globalStyles.pageText}> Are you sure?</Text>

            <Text style={globalStyles.pageText}>
                <Switch
                    trackColor={{ false: "#fad3aa", true: "#7fc8c9" }}
                    thumbColor={isEnabled1 ? "#000000" : "#000000"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </Text>
        </View>
        
    )

}