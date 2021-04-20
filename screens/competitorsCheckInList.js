import React, { useState } from 'react';
import { Button, View, Text, Image, TextInput, Switch} from 'react-native';
import { globalStyles } from '../styles/global';

//Develop an interface for Co-Host or Host to keep track of competitors who checked in

export default function ReviewDetails({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={globalStyles.container}>
           <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: 'gray' }}> List of Competitors</Text></Text></Text>
           <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/820380/image-1ceeec8a61bc5c0396cb6e7ca81e1657.gif'}}
                
            />

            <Text style={globalStyles.pageText}> Daniel Emz  <Text style={{ color: 'green' }}>StreetFighterBro#6023</Text>  <Text style={{ color: 'blue' }}>@Daniel_emz1</Text> <Text style={{ color: 'purple' }}>twitch.tv/danielsmurf</Text></Text>
           
            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/166749/image-88006eac7800d2a474630228c5ce026b.png'}}
                
            />

            <Text style={globalStyles.pageText}> James Peterson <Text style={{ color: 'green' }}>GOATjames#2236</Text>  <Text style={{ color: 'blue' }}>@goatJames</Text> <Text style={{ color: 'purple' }}></Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'data:image/jpeg;base64,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'}}
                
            />

            <Text style={globalStyles.pageText}> Pirate King Luffy <Text style={{ color: 'green' }}>finallyKingofthePirate#3756</Text>  <Text style={{ color: 'blue' }}></Text> <Text style={{ color: 'purple' }}>twitch.tv/PirateKingLuffy</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/241645/image-c4264a93bb4b487ee6d267cf8639ce1b.jpg'}}
                
            />

            <Text style={globalStyles.pageText}> Richard Gonzalez <Text style={{ color: 'green' }}>theFinalBoss#9837</Text>  <Text style={{ color: 'blue' }}></Text> <Text style={{ color: 'purple' }}></Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/1135850/image-98c7aa569849acd5a74b741625288e00.jpg'}}
                
            />

            <Text style={globalStyles.pageText}> Jorge Ortiz <Text style={{ color: 'green' }}>OrtizJay#7779</Text>  <Text style={{ color: 'blue' }}> @jorge.ortiz321</Text> <Text style={{ color: 'purple' }}>twitch.tv/ortizjay</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/1263693/image-a2a335414572b585009ae062610799af.gif'}}
                
            />

            <Text style={globalStyles.pageText}> Ashley <Text style={{ color: 'green' }}>sleepqueen#6081</Text>  <Text style={{ color: 'blue' }}></Text> <Text style={{ color: 'purple' }}>twitch.tv/sleepyqueen</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/224896/image-3967c35af4a06b54b5d70ee3d1aa023d.jpg'}}
                
            />

            <Text style={globalStyles.pageText}> Dylan Hansen <Text style={{ color: 'green' }}>hansenDy#1135</Text>  <Text style={{ color: 'blue' }}>@dylan_hansen</Text> <Text style={{ color: 'purple' }}>twitch.tv/dylan_hansen</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/1303418/image-02b42ea22d601e605aabbf1f3fd082ed.png'}}
                
            />

            <Text style={globalStyles.pageText}> Robert Smith <Text style={{ color: 'green' }}>thelastSmite#2155</Text>  <Text style={{ color: 'blue' }}>@smith.robertjake</Text> <Text style={{ color: 'purple' }}></Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/1054234/image-41e4920f89a3a72b288ae7892c6f7ba8.gif'}}
                
            />

            <Text style={globalStyles.pageText}> Oscar Celeste <Text style={{ color: 'green' }}>oCeleste#5466</Text>  <Text style={{ color: 'blue' }}>@oscare___celest</Text> <Text style={{ color: 'purple' }}></Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/254345/image-17361634d17a7cda9493e5122d8c5fbd.gif'}}
                
            />

            <Text style={globalStyles.pageText}> Kaithe3rd <Text style={{ color: 'green' }}>kaikai#3654</Text>  <Text style={{ color: 'blue' }}>@kaikaikai</Text> <Text style={{ color: 'purple' }}>twith.tv/kaithe3rd</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/935134/image-1116c33fa454f0218e64ae70f465a810.gif'}}
                
            />

            <Text style={globalStyles.pageText}> mario7 <Text style={{ color: 'green' }}>7thmario#4549</Text>  <Text style={{ color: 'blue' }}></Text> <Text style={{ color: 'purple' }}>twith.tv/7thmario</Text></Text>

            <Image
                style={{ width: 30, height: 30}}
                source={{uri: 'https://images.smash.gg/images/user/1211046/image-e3aa7c1317c9e28b3eea0709300ace0b.PNG'}}
                
            />

            <Text style={globalStyles.pageText}> FazeJake <Text style={{ color: 'green' }}>JakefromState#9674</Text>  <Text style={{ color: 'blue' }}>@FaZw.Jake</Text> <Text style={{ color: 'purple' }}>twith.tv/jakefromstate</Text></Text>

        </View>

        
        
    )

}