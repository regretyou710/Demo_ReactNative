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
  render() {
    return (
      <View style={styles.container}>
        <Text>文本框</Text>
        <TextInput
          style={styles.input}

          //定義默認值
          value='文字測試'

          //定義文本框是否可編輯
          editable={true}

          //定義獲得焦點後彈出什麼類型的鍵盤(模擬器功能沒啟動)
          keyboardType='numeric'

          //定義提示文字
          placeholder='請輸入...'
        />
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
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 30
  }
});