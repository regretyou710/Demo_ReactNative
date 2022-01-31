/* eslint-disable comma-dangle */
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
  //定義狀態state需要在構造函數中進行
  constructor() {
    super();
    this.state = {
      name: 'TOM'
    };

    //設置定時器，3秒鐘後修改state值
    setTimeout(() => {
      this.setState(() => { return { name: 'MARY' } });
    }, 3000);
  }

  render() {
    return (
      //根標籤
      <View>
        {/* this指的是App這個類(組件) */}
        <Text style={styles.stu}>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stu: {
    fontSize: 40,
    color: 'green'
  },
});
