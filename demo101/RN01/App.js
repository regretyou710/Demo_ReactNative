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
  StyleSheet,
} from 'react-native';

import Menu from './modules/menu';
import ItemList from './modules/itemList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        {/* 導航條 */}
        <Menu />

        {/* 列表 */}
        <ItemList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});