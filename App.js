
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

const App = () => {
    window.events = [];
    window.players = [new User("bienfu", "image1"), new User("dawg", "image2"), new User("mancake", "image3"), new User("LoLboy", "image4"), new User("torny", "image5"), new User("monke", "image6")
        , new User("pander", "image7"), new User("what", "image8")];
    window.cohosts = [window.players[0], window.players[1]]
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