import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Avatar, Card, Title, Paragraph, Icon} from "react-native-paper";
import { User, UserButton } from "../components/user";
/*
const handlePlayerAdd = () => {
  var hi = new User(playerName, "image0");
  window.players.push(hi);
  setVisible3(false);
}

var players = [];
for (let i = 0; i < window.players.length; i++) {
    players.push(
        <View>
            <View style={styles.separator} />
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <UserButton username={window.players[i].username} img={window.players[i].image}>
            </UserButton>
        </View>
        <View style={styles.separator} />
        </View>
    )
}
*/
export default function CompetitorGatewayScreen({navigation}) {
    return (
      <ScrollView style={globalStyles.container}>
         
          <Text style={globalStyles.pageText}><Text style={{ fontSize: 17 }}><Text style={{ color: '#003366' }}> <Image style={{ width: 60, height: 70}} source={{uri: 'https://i.pinimg.com/originals/2d/61/9d/2d619dbb2e10be86500e39a81b4c4f3e.jpg'}}/> chefcurry <Text style={{ color: 'blue' }}>ecurrry#2186</Text></Text></Text></Text>
          
          <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: '#009933' }}> </Text></Text></Text>

          <Text style={globalStyles.pageText}><Text style={{ fontSize: 17 }}><Text style={{ color: '#009933' }}> Your Tournaments</Text></Text></Text>
        <Card style={style.eventCard}>
          <Card>
            <Image
              style={style.image}
              source={require("../assets/ultimate.jpg")}
            ></Image>
            <Title style={style.eventTitle}>
              Smash Ultimate Tournament
            </Title>
            
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: '#cccc00' }}> Sponsored by</Text></Text></Text>
            <Image style={{ width: 100, height: 70}} source={{uri: 'https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_600/q_auto,f_png/redbullcom/2020/2/11/v0u4dc5rcit8tu3bz1kt/3x'}}/>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: '#ff0000' }}> Tournament Rules</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#ff5050' }}> Best out of 5, Round Robin</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#ff5050' }}> Winner advances, no rematches</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#ff5050' }}> Winner takes all ($5K price pool)</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#ff5050' }}> </Text></Text></Text>

            <Text style={globalStyles.pageText}><Text style={{ fontSize: 15 }}><Text style={{ color: '#0033cc' }}> Host/Co-Host</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#0099ff' }}> OTP_kirby </Text><Text style={{ color: 'blue' }}>tyler1smurf#0003</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#0099ff' }}> OTP_pikachewy </Text><Text style={{ color: 'blue' }}>ashspet#9325</Text></Text></Text>
            <Text style={globalStyles.pageText}><Text style={{ fontSize: 12 }}><Text style={{ color: '#ff5050' }}> </Text></Text></Text>
            
           

            <Button
                
                onPress = {() => navigation.navigate('Competitor Interface')}
                title = 'View more'
                 />
            
          </Card>
        </Card>
       
      </ScrollView>
      
    );
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
  