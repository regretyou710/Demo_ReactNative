/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// eslint-disable-next-line prettier/prettier
import React, {
  Component
} from 'react';

// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={{ color: 'blue', fontSize: 50 }}>文字內容測試</Text>
        <Text style={styles.style1}>文字內容測試</Text>
        <Text style={[styles.style1, styles.style2]}>文字內容測試</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  style1: {
    color: 'green',
    fontSize: 40,
  },
  style2: {
    backgroundColor: 'yellow'
  }
});