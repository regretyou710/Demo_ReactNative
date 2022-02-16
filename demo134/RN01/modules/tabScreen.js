import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class TabScreen extends Component {
    render() {
        const navigation = this.props.navigation;
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tab Screen</Text>
                <Button
                    title="Go to Page"
                    onPress={() => navigation.navigate('Page')}
                />
            </View>
        );
    }
}

export default TabScreen;