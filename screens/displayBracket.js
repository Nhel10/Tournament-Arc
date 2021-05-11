import React from 'react';
import { useState } from "react";
import Dialog from "react-native-dialog";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, SafeAreaView, TextInput, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { User, UserButton } from "../components/user";
import {
    Title,
    List,
    RadioButton,
} from 'react-native-paper';

export default function displayBracket() {
    var testBracket = window.brackets[0]

    return (
        <View style={{flexDirection:"column"}}>
            {testBracket.renderBracket()}
        </View>
    )
}
