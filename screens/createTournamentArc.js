import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";
import { Account, accounts } from '../App.js'

function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button
        color = '#304857'
        padding = {10}
        margin = {15}
        height = {40}
        title={`${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    );
}



class Inputs extends Component {
    state = {
        username: '',
        password: ''
    }

    handleUsername = (text) => {
        this.setState({username: text})
    }

    handlePassword = (text) => {
        this.setState({password: text})
    }

    login = (username, password) => {
        // DOES -- creates new user account with given email, username, password; user will use the latter two to login
        //
        // TODO -- user login directs user to their home page
        //      -- "wish to create an account" button
        //
        // BUGS -- let me know

        if (this.state.username == "" || this.state.password == "")
            alert('Missing Required Fields')
        else {
            var a = accounts.findIndex((element) => element.username.toUpperCase() == username.toUpperCase())
            if (a == -1)
                alert('User Not Found')
            else {
                if (accounts[a].password != password)
                    alert('Log in Information is Incorrect')
                else alert('Logged In Successfully')
            }
        }
    }

    render(){
        return (
            <View style = {styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="What Game"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handleUsername}
                    maxLength={25}
                    textAlign="center"
                    textContentType="username"
                    value={this.state.username}
                />
            
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Rule Set"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Max participants"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Bracket Style"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />  

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Start Date"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="End Date"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />
            
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={
                    () => this.login(this.state.username, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                

               

            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#304857',
        borderWidth: 2
    },
    submitButton: {
        backgroundColor: '#304857',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButton2: {
        backgroundColor: '#304857',
        padding: 10,
        margin: 10,
        height: 40,
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
    }
})