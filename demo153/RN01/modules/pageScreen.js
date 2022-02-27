import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page Screen</Text>
            </View>
        );
    }
}

export default PageScreen;