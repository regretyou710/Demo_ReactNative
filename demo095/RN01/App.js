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
  ScrollView
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.outerContent}
          contentContainerStyle={styles.outer}
        >
          <Text style={styles.innerContent}>人氣</Text>
          <Text style={styles.innerContent}>影音</Text>
          <Text style={styles.innerContent}>看板</Text>
          <Text style={styles.innerContent}>自選</Text>
          <Text style={styles.innerContent}>報告</Text>
          <Text style={styles.innerContent}>問答</Text>
          <Text style={styles.innerContent}>追蹤</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  outer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  outerContent: {
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
    height: 70,
  },
  innerContent: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
    paddingLeft: 25,
    paddingRight: 25,
  },
});