//Account recovery class
//This is the Account Recovery Class and the screen associated with it. Users will go to this screen
//if they can no longer access their account if they forgot their password

//imported React and other elements from react-native
import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

/* BAREBONES: Still work in progress. Not entirely sure if this is a good way of setting up the class in terms of
the constructor and whether the getter/setter methods should be inside or outside the class*/

//Account recovery class that is to be exported for use by other parts of the application
//includes variables for 3 security questions and 3 answers all as blank strings
export default class accountRecovery {
    return (
        securityQuestion1 = "",
        securityQuestion2 = "",
        securityQuestion3 = "",
        securityAnswer1 = '',
        securityAnswer2 = '',
        securityAnswer3 = ''
    )
}

//The getter functions for the 3 security questions. Each question number corresponds to the same answer number Q1 = A1
function getQ1() {
    return securityQuestion1;
}

function getQ2() {
    return securityQuestion2;
}

function getQ3() {
    return securityQuestion3;
}

//The getter functions for the 3 answers to the security questions. Each number corresponds to the same question number
function getA1() {
    return securityAnswer1;
}

function getA2() {
    return securityAnswer2;
}

function getA3() {
    return securityAnswer3;
}

//The setter functions for the security questions. Each question number corresponds to the same answer number Q1 = A1
function setQ1(question) {
    this.securityQuestion1 = question;
}

function setQ2(question) {
    this.securityQuestion2 = question;
}

function setQ3(question) {
    this.securityQuestion3 = question;
}

//The setter functions for the answers to the security questions. Each number corresponds to the same question number 
function setA1(answer) {
    this.securityAnswer1 = answer;
}

function setA2(answer) {
    this.securityAnswer2 = answer;
}

function setA3(answer) {
    this.securityAnswer3 = answer;
}