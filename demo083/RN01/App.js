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
      SchName: '',
      BulletinSubject: ''
    };
  }

  press() {
    //https://data.tainan.gov.tw/dataset/edu-website/resource/78609065-3af4-4996-93a4-a5f029a898c3
    const url = 'http://odata.tn.edu.tw/ebookApi/api/getNews';

    fetch(url).then(
      response => {
        response.json().then(response =>
          this.setState(({
            SchName: response[0].SchName,
            BulletinSubject: response[0].BulletinSubject
          }))
        );
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}
          onPress={this.press.bind(this)}
        >
          點擊發送請求
        </Text>
        <Text>{this.state.SchName}</Text>
        <Text>{this.state.BulletinSubject}</Text>
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
    justifyContent: 'center',
  },
  text: {
    width: '70%',
    height: 50,
    backgroundColor: 'green',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
  }
});