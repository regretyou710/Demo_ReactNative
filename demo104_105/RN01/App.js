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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>
          <FontAwesome name='address-card' size={50} />
           Welcome!
          </Text>
        <SimpleLineIcons name='people' size={50} color='red' />
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
});