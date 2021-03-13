import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/drawer";
import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsconfig from "./aws-exports";

<<<<<<< Updated upstream
---*/
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import {AppLoading} from 'expo';
import { AppNavigator } from './routes/drawer';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
=======
Amplify.configure(awsconfig);

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Authenticator></Authenticator>
      
    // </View>
>>>>>>> Stashed changes

    <AppNavigator></AppNavigator>
    
  );
}

<<<<<<< Updated upstream
/*--- 
This comment is a test comment to put while in testFile branch
---*/

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false)
  new Account("example@email.com", "user1", "123")

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
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
>>>>>>> Stashed changes
