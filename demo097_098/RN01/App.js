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
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      list: [{
        itemID: '1',
        itemText: '圖片一',
        itemImage: require('./img/RNICON.png')
      },
      {
        itemID: '2',
        itemText: '圖片二',
        itemImage: require('./img/RNICON.png')
      }, {
        itemID: '3',
        itemText: '圖片三',
        itemImage: require('./img/RNICON.png')
      }, {
        itemID: '4',
        itemText: '圖片四',
        itemImage: require('./img/RNICON.png')
      }]
    }
  }

  // 用來處理數據源中每個元素
  _renderItem({ item }// item表示數組中每一項對象
  ) {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.itemImage} style={styles.itemImage}></Image>
        <Text style={styles.itemText}>{item.itemText}</Text>
      </View>
    );
  }

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

        {/* 列表 */}
        <FlatList
          data={this.state.list} // 數據源
          renderItem={this._renderItem} // 渲染函數
          numColumns={2}// 每行顯示個數
        />
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
    color: 'rgba(0,0,0,0.5)',
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemContainer: {
    borderWidth: 1,
    backgroundColor: 'rgba(185,230,105,0.5)',
    width: '50%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    marginTop: 15,
  },
  itemImage: {
    // Dimensions獲得屏幕相關訊息組件
    width: Dimensions.get('window').width / 2 * 0.7,

    // 假設螢幕比為16:9，已知寬度求高
    height: Dimensions.get('window').width / 2 * 0.7 * 9 / 16,
  },
});