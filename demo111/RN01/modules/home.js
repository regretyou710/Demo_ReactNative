import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { name: '參數傳遞1' })}
            />
            <Button
                title="Go to Details2"
                onPress={() => navigation.navigate('Details2', { name: '參數傳遞2' })}
            />
        </View>
    );
}

export default HomeScreen;