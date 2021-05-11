/*--- 
  SUMMARY:
  This is the main file that the program will run 
---*/

import { User } from "./components/user";
import React, { useState, Component } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase/app";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import Register from "./components/auth/register";
import Landing from "./components/auth/landing";
import AppNavigator from "./routes/drawer";
import Login from "./components/auth/login";
import {Bracket} from './components/bracket';
import { Event } from "./components/event";
import ProfileEdit from "./screens/profileEdit";
import ProfileScreen from "./screens/profileScreen";
import Profile from "./screens/profile";
import Main from "./components/main";



    window.users = []
    window.events = [];
window.brackets = [];
    new User("johniscool123", "image1");
    new User("bienfu", "image1");
    new User("dawg", "image2");
    new User("mancake", "image3");
    new User("LoLboy", "image4");
    new User("torny", "image5");
    new User("monke", "image6");
    new User("pander", "image7");
    new User("what", "image8");
    new User("", "image0");
    new Event("Event 0", "This is Event 0's Description", new Date(), new Date(), users[0]);
    new Event("Event 1", "This is Event 1's Description", new Date(), new Date(), users[0]);
    events[0].addPlayer(users[1]);
    events[0].addPlayer(users[2]);
    window.players = [users[1], users[2], users[3]];
    window.cohosts = [window.players[0], window.players[1]]
    window.eventID = 0;
    window.userID = 0;


    //console.log(brackets);
    brackets.push(new Bracket("Bracket 1", "This is a description", "Steet Fighter 5"));
    brackets[0].addPlayer(users[1]);
    brackets[0].addPlayer(users[2]);
    brackets[0].addPlayer(users[3]);
brackets[0].addPlayer(users[4]);
brackets[0].addPlayer(users[5]);
brackets[0].addPlayer(users[6]);
brackets[0].addPlayer(users[7]);
brackets[0].addPlayer(users[8]);
    brackets[0].startBracket();
    console.log(brackets);


  

  
 

    window.tournamentiD = 0;


const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyBzjtcqcgkOB6DvvcocbHiDjzJjijhRwBw",
  authDomain: "tournament-arc-main.firebaseapp.com",
  projectId: "tournament-arc-main",
  storageBucket: "tournament-arc-main.appspot.com",
  messagingSenderId: "179357543662",
  appId: "1:179357543662:web:cbce9794bbbab3d2e197ff",
  measurementId: "G-E84FVP32MN",
};

// Initializes the firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <AppNavigator></AppNavigator>
      </Provider>
    );

  }
}

export default App;

// const App = () => {
//     window.events = [];
//     window.players = [new User("bienfu", "image1"), new User("dawg", "image2"), new User("mancake", "image3"), new User("LoLboy", "image4"), new User("torny", "image5"), new User("monke", "image6")
//         , new User("pander", "image7"), new User("what", "image8")];
//     window.cohosts = [window.players[0], window.players[1]]
//   return (
//     <AppNavigator/>
//   );
// };

// export default App;

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
