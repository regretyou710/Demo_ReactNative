import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TabLogin extends Component {
    constructor() {
        super();
        this.state = {
            account: '',
            password: '',
        };
    }

    UNSAFE_componentWillMount() {
        storageData('this.state.account');
    }

    _onChangeText(val) {
        // console.log(val);
        this.setState({
            account: val
        });
    }

    _onPress() {
        const url = '';

        axios.post(url, {
            account: this.state.account,
            password: this.state.password
        }).then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>帳號:{this.state.account}</Text>
                <TextInput placeholder={"account"} onChangeText={this._onChangeText.bind(this)}></TextInput>
                <Text>密碼:{this.state.password}</Text>
                <TextInput placeholder={"password"} secureTextEntry={true} onChangeText={(val) => this.setState({ password: val })}></TextInput>
                <Button title={"確定"} onPress={this._onPress.bind(this)}></Button>
            </View>
        );
    }
}

//npm i @react-native-async-storage/async-storage --save
const storageData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {

    }
};

export default TabLogin;