import React from 'react'
import {View, Text, Image} from 'react-native'
import {connect} from 'react-redux'

export function Profile(props) {
    const {currentUser, userProfile} = props;
    console.log({currentUser, userProfile})
    return (
        <View>
            <Text>profile</Text>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    userProfile: store.userState.userProfile
})

export default connect(mapStateToProps, null)(Profile)