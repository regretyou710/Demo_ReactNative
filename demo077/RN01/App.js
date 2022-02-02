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
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'red'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>文本框</Text>
        <TextInput
          style={styles.input}

          onChangeText={(colorStr) => this.setState(
            { backgroundColor: colorStr })}
        />
        <Text></Text>
        {/* <View style={[styles.displayArea, this.state]}></View> */}
        <View style={[styles.displayArea, { backgroundColor: this.state.backgroundColor }]}></View>
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
    backgroundColor: '#FF00FF',
    color: 'white',
    fontSize: 30
  },
  displayArea: {
    width: '50%',
    height: '30%',
    // backgroundColor: 'green'
  }
});