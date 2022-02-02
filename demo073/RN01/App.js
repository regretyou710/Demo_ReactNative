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
      star: '★'
    };

    setInterval(() =>
      // this.setState(() => { return { star: this.state.star ? '' : '★' }; })
      // this.setState(() => ({ star: this.state.star ? '' : '★' }))
      this.setState({ star: this.state.star ? '' : '★' })
      , 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.star}>{this.state.star}</Text>
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
  }, star: {
    fontSize: 160,
    color: 'red'
  }
});