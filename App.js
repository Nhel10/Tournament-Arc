
<<<<<<< Updated upstream
/*--- 
  SUMMARY:
  This is the main file that the program will run 
---*/

import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import AppNavigator from './routes/drawer';
import { NavigationContainer } from "@react-navigation/native";
=======
Amplify.configure(awsconfig);
>>>>>>> Stashed changes

const App = () => {
  return (
<<<<<<< Updated upstream
    <AppNavigator/>
=======
    // <View style={styles.container}>
    //   <Authenticator></Authenticator>
      
    // </View>

    <AppNavigator></AppNavigator>
    
>>>>>>> Stashed changes
  );
};

export default App;


/*
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

<<<<<<< Updated upstream

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
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
>>>>>>> Stashed changes
