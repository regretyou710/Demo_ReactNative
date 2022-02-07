import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        let name = this.props.route.params.name;
        const { goBack } = this.props.navigation;//解構賦值

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Details Screen{name}</Text>
                <Button title={'回Home'} onPress={() => goBack()} />
            </View>
        );
    }
}

export default DetailsScreen2;