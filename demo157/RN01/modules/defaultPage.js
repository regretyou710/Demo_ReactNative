import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DefaultPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});