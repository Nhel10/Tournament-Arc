import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import Images from '../index';
import { useNavigation } from '@react-navigation/native';
/*
 Calling new User(args) pushes a newly created user object onto global array window.users in App.js
 Args:
 username, image - String
 image must be inserted into "../index.js" in order to be loaded dynamically, where the string is the name of the image
 */
export class User {
    constructor(username, image) {
        this.username = username;
        this.image = image;
        this.UID = window.users.length;
        window.users.push(this);
    }
}

export class UserButton extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        UID: PropTypes.number.isRequired
    }

    render() {
        const { username, img, UID } = this.props;

        return (
            <GoToButton username={username} img={img} UID={UID} screenName="Profile" />)
    }
}

function GoToButton({ username, img, UID, screenName }) {
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {window.userID = UID; navigation.navigate(screenName); }}>
                <Avatar.Image
                size={50}
                source={Images[img]}
            />
                <Text numberOfLines={1} style={{ width: 50, textAlign: 'center' }}>{username}</Text>
        </TouchableOpacity >
        </View >
    );
}