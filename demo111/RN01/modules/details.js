import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen(navigation) {
    console.log(navigation);
    let name = navigation.route.params.name;
    const { goBack } = navigation.navigation;//解構賦值

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Details Screen{name}</Text>
            <Button title={'回Home'} onPress={() => goBack()} />
        </View>
    );
}

export default DetailsScreen;