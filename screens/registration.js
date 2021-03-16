import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";
import { Account, accounts } from '../App.js'
import { useNavigation } from '@react-navigation/native';

function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button
        color = '#304857'
        title={`Login`}
        padding = {10}
        margin = {15}
        height = {40}
        onPress={() => navigation.navigate(screenName)}
      />
    );
}
/* */
class Registration extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
        usernameCondition: '',
        passwordCondition: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handleUsername = (text) => {
        this.setState({ username: text })
        this.handleUsernameConditions()
    }

    handlePassword = (text) => {
        this.setState({ password: text })
        this.handlePasswordConditions()
    }

    handlePasswordConfirm = (text) => {
        this.setState({ passwordConfirm: text })
    }

    handleUsernameConditions() {
        var usernameCondition = ''
        if (this.state.username.length > 24) 
            usernameCondition += '- Max Length Reached\n'
        this.setState({ usernameCondition: usernameCondition })
    }

    handlePasswordConditions() {
        var passwordCondition = ''
        var characters = /^.{5,25}$/
//        var symbols = /^(?=.*[!@#$%^&*])$/
//        var capital = /^(?=.*[A-Z])$/
        if (!characters.test(this.state.password))
            passwordCondition += '- Must Contain 6 to 25 Characters\n'
//        if (!symbols.test(this.state.password))
//            passwordCondition += '- Must contain a Symbol or Number\n'
//        if (!capital.test(this.state.password))
//            passwordCondition += '- Must contain a Capital Letter\n'
        this.setState({ passwordCondition: passwordCondition })
    }

    createAccount = (email, username, password) => {
        // DOES -- creates new user account with given email, username, password; user will use the latter two to login
        //
        // TODO -- add checks to ensure email/username/password follow necessary guidelines, visual aids
        //      -- user registration directs new user to their home page
        //      -- "already have an account" button
        //
        // BUGS -- let me know
        var characters = /^.{6,25}$/
        if (this.state.email == "" || this.state.username == "" || this.state.password == "")
            alert('Missing Required Fields')
        else if (!characters.test(this.state.password)) 
            alert('Password Must Contain Between 6 and 25 Characters')
        else if (this.state.password != this.state.passwordConfirm)
            alert('Passwords Do Not Match')
        else {
            if (accounts.findIndex((element) => element.email.toUpperCase() == email.toUpperCase()) != -1)
                alert('This Email Address is Already in Use')
            else if (accounts.findIndex((element) => element.username.toUpperCase() == username.toUpperCase()) != -1)
                alert('This Username is Already in Use')
            else {
                alert('Account Successfully Created')
                new Account(email,username,password)
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email Address"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                    maxLength={25}
                    textAlign="center"
                    textContentType="emailAddress"
                    value={this.state.email}
                />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Username"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handleUsername}
                    maxLength={25}
                    textAlign="center"
                    textContentType="username"
                    value={this.state.username}
                />

                <Text style={styles.text}>
                    {this.state.usernameCondition}
                </Text>

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />

                <Text style={styles.text}>
                    {this.state.passwordCondition}
                </Text>

                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Re-enter Password"
                    placeholderTextColor="#304857"
                    autoCapitalize="none"
                    onChangeText={this.handlePasswordConfirm}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.passwordConfirm}
                />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.createAccount(this.state.email, this.state.username, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> CREATE ACCOUNT </Text>
                </TouchableOpacity>

                <GoToButton screenName = "Inputs" />

            </View>
        )
    }
}

export default Registration

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
    submitButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    text: {
        color: 'red',
        paddingLeft: 15
    }
})