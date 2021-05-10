import firebase from "firebase";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchUserProfile, clearData } from "../redux/actions/index";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from "../screens/profile";


const Tab = createMaterialBottomTabNavigator();


const onLogout = () => {
  firebase.auth().signOut();
}

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserProfile();
    this.props.clearData()
  }

 

  render() {
    return (
      <Tab.Navigator initialRouteName="Profile" labeled={false}>
        <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) =>
bindActionCreators({ fetchUser, fetchUserProfile, clearData}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
