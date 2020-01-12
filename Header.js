import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EC5D30',
        height: 140,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 30
    }
});

export default Header;

