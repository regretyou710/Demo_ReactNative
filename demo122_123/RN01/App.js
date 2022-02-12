/* eslint-disable comma-dangle */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

export default class App extends Component<{}> {
  // render前
  UNSAFE_componentWillMount() {
    // 使用key來保存數據（key-only）。這些數據一般是全局獨有的，需要謹慎單獨處理的數據
    // 批量數據請使用key和id來保存(key-id)，具體請往後看
    // 除非你手動移除，這些數據會被永久保存，而且默認不會過期。
    storage.save({
      key: 'loginState',  // 注意:請不要在key中使用_下劃線符號!
      data: {
        from: 'some other site',
        userid: 'some userid',
        token: 'some token'
      },

      // 如果不指定過期時間，則會使用defaultExpires參數
      // 如果設爲null，則永不過期
      expires: 1000 * 3600
    });
  }

  // render後
  componentDidMount() {
    // 讀取
    storage.load({
      key: 'loginState',
    }).then(ret => {
      // 如果找到數據，則在then方法中返回
      // 注意：這是異步返回的結果（不瞭解異步請自行搜索學習）
      // 你只能在then這個方法內繼續處理ret數據
      // 而不能在then以外處理
      // 也沒有辦法“變成”同步返回
      // 你也可以使用“看似”同步的async/await語法

      alert(ret.userid);
      this.setState({ user: ret });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AsyncStorage</Text>
      </View>
    );
  }
}

var storage = new Storage({
  // 最大容量，默認值1000條數據循環存儲
  size: 1000,

  // 存儲引擎：對於RN使用AsyncStorage，對於web使用window.localStorage
  // 如果不指定則數據只會保存在內存中，重啓後即丟失
  storageBackend: AsyncStorage,

  // 數據過期時間，默認一整天（1000 * 3600 * 24 毫秒），設爲null則永不過期
  defaultExpires: 1000 * 3600 * 24,

  // 讀寫時在內存中緩存數據。默認啓用。
  enableCache: true,

  //#region 
  // 如果storage中沒有相應數據，或數據已過期，
  // 則會調用相應的sync方法，無縫返回最新數據。
  // sync方法的具體說明會在後文提到
  // 你可以在構造函數這裏就寫好sync的方法
  // 或是在任何時候，直接對storage.sync進行賦值修改
  // 或是寫到另一個文件裏，這裏require引入
  //#endregion

  // sync: require('你可以另外寫一個文件專門處理sync')

})

// 最好在全局範圍內創建一個（且只有一個）storage實例，方便直接調用

// 對於web
// window.storage = storage;

// 對於react native
global.storage = storage;

// 這樣，在此**之後**的任意位置即可以直接調用storage
// 注意：全局變量一定是先聲明，後使用
// 如果你在某處調用storage報錯未定義
// 請檢查global.storage = storage語句是否確實已經執行過了

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});