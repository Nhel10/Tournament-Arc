import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import Images from '../index';
import { useNavigation } from '@react-navigation/native';

export class User {
    constructor(username, image) {
        this.username = username;
        this.image = image;
    }
}

export class UserButton extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }

    handlePress = () => {
        var navigation = useNavigation();
        console.log("reached here");
        navigation.navigate('Profile');
    }

    render() {
        const { username, img } = this.props;

        return (
            <GoToButton username={username} img={img} screenName="Profile" />)
    }
}

function GoToButton({ username, img, screenName }) {
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate(screenName); }}>
                <Avatar.Image
                size={50}
                source={Images[img]}
            />
        <Text style={{ textAlign: 'center' }}>{username}</Text>
        </TouchableOpacity >
        </View >
    );
}