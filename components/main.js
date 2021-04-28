import firebase from "firebase";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, clearData } from "../redux/actions/index";


const onLogout = () => {
  firebase.auth().signOut();
}

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.clearData()
  }

 

  render() {
    const { currentUser } = this.props;
    console.log()
    if(currentUser === undefined){
      return(
        <View></View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>user is logged in</Text>
        <Button
        title="Logout"
        onPress={() => onLogout()}/>
      </View>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, clearData}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
