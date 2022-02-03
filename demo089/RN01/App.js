/* eslint-disable comma-dangle */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  Component
} from 'react';

import {
  View,
  Text,
  StyleSheet, TextInput
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      cropMarketCode: '',
      marketCode: '',
      marketName: ''
    };
  }

  changeText(inputVal) {
    this.setState({ cropMarketCode: inputVal });
  }

  press() {
    //https://data.coa.gov.tw/api.aspx
    const url = 'https://data.coa.gov.tw/api/v1/CropMarketType?CropMarketCode=' + this.state.cropMarketCode;
    
    fetch(url).then((response) =>
      response.json().then((response) => {
        if (response.Data[0] != undefined) {
          this.setState(
            {
              marketCode: response.Data[0].MarketCode,
              marketName: response.Data[0].MarketName
            }
          )
        } else
          alert('沒有資料!');
      }
      )
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={this.changeText.bind(this)}
          placeholder='請輸入...'></TextInput>
        <Text></Text>
        <Text style={styles.text} onPress={this.press.bind(this)}>發送請求</Text>
        <Text style={styles.display}>MarketCode :{this.state.marketCode}</Text>
        <Text style={styles.display}>MarketName :{this.state.marketName}</Text>
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
  input: {
    fontSize: 20,
    backgroundColor: '#9D9D9D',
    borderRadius: 10,
    width: '20%',
    lineHeight: 20,
  },
  text: {
    fontSize: 25,
    backgroundColor: 'green',
    textAlign: 'center',
  },
  display: {
    fontSize: 18,
    color: '#000000',
  },
});