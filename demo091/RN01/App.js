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
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      schoolData: [{
        bulletinID: '',
        bulletinSubject: '',
        office: ''
      }],
      isRefreshing: false
    }
  }

  getDatas() {
    const url = 'http://odata.tn.edu.tw/ebookApi/api/getNews';

    fetch(url).then(response =>
      response.json().then(response => {
        let rsData = [];

        response.map(e =>
          rsData.push({
            bulletinID: e.BulletinID,
            bulletinSubject: e.BulletinSubject,
            office: e.Office
          })
        );

        this.setState({ schoolData: rsData });
      })
    );
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true
    });

    setTimeout(() => {     
      let initData = [];

      this.setState({
        schoolData: initData,
        isRefreshing: false
      });
    }
      , 1000);
  }

  render() {
    //用來存放每個組件的數組
    let schoolData = [];

    //循環marketList，將每一項數據都組合成一個Text組件，存到一個單獨的數組中
    this.state.schoolData.map(e => schoolData.push(
      <View key={e.bulletinID}>
        <Text style={[styles.text, { backgroundColor: 'purple', color: 'white' }]}>BulletinSubject:{e.bulletinSubject}</Text>
        <Text style={[styles.text, { color: 'blue' }]}>Office:{e.office}</Text>
        <Text></Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.btn} onPress={this.getDatas.bind(this)}>請求按鈕</Text>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this._onRefresh.bind(this)} />
          }
        >
          {schoolData}
        </ScrollView>
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