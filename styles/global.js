import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    constainer: {
        flex: 20,
        padding: 24,
    },
    titleText: {
        //fontFamily: 'nunito-bold',
        fontSize: 50,
        color: '#333',
        padding: 10,
    },
    pageText: {
        //fontFamily: 'nunito-regular',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});