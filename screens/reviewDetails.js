

import React from 'react';
import { Button, View, Text } from 'react-native';


export default function ReviewDetails({navigation}) {
    var testBracket = window.brackets[0]
    return (
        <View style={{flexDirection:"column"}}>
           {testBracket.renderBracket()}
        </View>
    )
}
