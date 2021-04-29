import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import { globalStyles } from '../styles/global';
// import CheckBox from '@react-native-community/checkbox';
import DialogBox from 'react-native-dialogbox';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export default function RegsiterTourneyScreen() {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [toggleCheckBox1, setToggleCheckBox1] = React.useState(false);
    const [toggleCheckBox2, setToggleCheckBox2] = React.useState(false);
    const [toggleCheckBox3, setToggleCheckBox3] = React.useState(false);
    const [toggleCheckBox4, setToggleCheckBox4] = React.useState(false);
    

    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}>
                <Avatar.Image
                    size={50}
                    source={require('../assets/bienfu.png')}
                />
                <View style={{
                    marginLeft: 15,
                    flexDirection: 'column'
                    }}>
                    <Title style={styles.title}>johniscool123</Title>
                    <Caption style={styles.caption}>@KirbyKiller</Caption>
           
                </View>
            </View>
            <View style={{marginLeft: 5}}>
                <Title style={styles.moreInput}>Prefix / Sponsor</Title>
                <SafeAreaView>
                    <TextInput
                        style = {styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Team (optional)"
                    />
                    </SafeAreaView>    
                <Title style={styles.moreInput}>Select Tournament Arc</Title>

                <View style = {{flexDirection: 'row'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox1}
                        onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                    />
                    <View style = {{marginLeft: 5}}>
                        <Title style={styles.checkbox}>Tournament 1</Title>
                        </View>
                    </View>
                
                <View style = {{flexDirection: 'row'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox2}
                        onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                    />
                    <View style = {{marginLeft: 5}}>
                        <Title style={styles.checkbox}>Tournament 2</Title>
                        </View>
                    </View>
                
                <View style = {{flexDirection: 'row'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox3}
                        onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                    />
                    <View style = {{marginLeft: 5}}>
                        <Title style={styles.checkbox}>Tournament 3</Title>
                        </View>
                    </View>
                
                <View style = {{flexDirection: 'row'}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox4}
                        onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                    />
                    <View style = {{marginLeft: 5}}>
                        <Title style={styles.checkbox}>Tournament 4</Title>
                        </View>
                    </View>
            <Button
                title="Confirm"
                color="#f194ff"
                onPress={() => Alert.alert('Tournament Entered')}
                />
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

    input: {
        height: 40,
        width: 300,
        margin: 1,
        borderWidth: 1,
        flexDirection: 'column',
      },
});