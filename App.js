
/*--- 
  SUMMARY:
  This is the main file that the program will run 
---*/
import { User} from "./components/user";
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import AppNavigator from './routes/drawer';
import { NavigationContainer } from "@react-navigation/native";
import ProfileEdit from './screens/profileEdit';
import Profile from './routes/profileStack';
import ProfileScreen from './screens/profileScreen';
import { Event } from './components/event';

const App = () => {
    window.users = []
    window.events = [];
    new User("johniscool123", "image1");
    new User("bienfu", "image1");
    new User("dawg", "image2");
    new User("mancake", "image3");
    new User("LoLboy", "image4");
    new User("torny", "image5");
    new User("monke", "image6");
    new User("pander", "image7");
    new User("what", "image8");
    new Event("Event 0", "This is Event 0's Description", new Date(), new Date(), users[0]);
    new Event("Event 1", "This is Event 1's Description", new Date(), new Date(), users[0]);
    events[0].addPlayer(users[1]);
    events[0].addPlayer(users[2]);
    window.players = [users[1], users[2], users[3]];
    window.cohosts = [window.players[0], window.players[1]]
    window.eventID = 0;
    window.userID = 0;
  return (
    <AppNavigator/>
  );
};


export default App;


/*
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false)
 

  if(fontsLoaded){
      return (
          <AppNavigator />
      );
  } else {
      return (
          <AppLoading
              startAsync={getFonts}
              onFinish={() => setFontsLoaded(true)}
          />
      )
  }
}
*/