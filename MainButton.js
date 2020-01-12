import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MainButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '40%',
        padding: 20,
        backgroundColor: '#EC5D30'
    },
    text: {
        color: 'white'
    }
});

export default MainButton;