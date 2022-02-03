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
  StyleSheet
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      marketCode: [''],
    }
  }

  getDatas() {
    //https://data.coa.gov.tw/api.aspx
    const url = 'https://data.coa.gov.tw/api/v1/CropMarketType';

    fetch(url).then(response =>
      response.json().then(response => {
        let rsData = [];

        response.Data.map(e => rsData.push(e.MarketName));

        this.setState({
          marketCode: rsData
        });
      })
    );
  }

  render() {
    //用來存放每個組件的數組
    let marketCodeList = [];

    //循環marketCodeList，將每一項數據都組合成一個Text組件，存到一個單獨的數組中
    this.state.marketCode.map(e => marketCodeList.push(
      <Text style={styles.text}>MarketCode:{e}</Text>
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.btn} onPress={this.getDatas.bind(this)}>請求按鈕</Text>

        {/* <Text style={styles.text}>MarketCode:{this.state.marketCode}</Text> */}
        {marketCodeList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    fontSize: 25,
    backgroundColor: 'green',
    textAlign: 'center',
    margin: 20,
  },
});