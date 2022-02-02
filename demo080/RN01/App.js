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
  press() {
    // alert('Press');    
    // console.log('Press');

    const url = 'http://odata.tn.edu.tw/ebookApi/api/getNews';

    fetch(url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: 'yourValue',
          secondParam: 'yourOtherValue'
        })
      }
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}
          onPress={this.press}
        >
          點擊發送請求
        </Text>
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
    height: 200,
    backgroundColor: 'green',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    lineHeight: 200,
  }
});