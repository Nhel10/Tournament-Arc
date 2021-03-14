
/*--- 
  SUMMARY:
  This is the main file that the program will run 
---*/

import React from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import AppNavigator from './routes/drawer';
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  return (
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
  );
}
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