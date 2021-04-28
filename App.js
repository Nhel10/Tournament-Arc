/*--- 
  SUMMARY:
  This is the main file that the program will run 
---*/
import { User } from "./components/user";
import React, { useState, Component } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { AppLoading } from "expo";
import AppNavigator from "./routes/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import ProfileEdit from "./screens/profileEdit";
import Profile from "./routes/profileStack";
import ProfileScreen from "./screens/profileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase/app";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import Register from "./components/auth/register";
import Landing from "./components/auth/landing";
import Main from "./components/main";
import Login from "./components/auth/login";

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
          <Text>Loading</Text>
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
        <Main />
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
