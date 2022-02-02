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
  constructor() {
    super();
    this.state = {
      //time: new Date()//物件不能直接被呼叫
      time: new Date().toUTCString()
    };

    setInterval(() => this.setState(() => {
      return {
        time: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
      };
    }
    ), 1000);
  }

  render() {
    return (
      <View>
        <Text style={styles.style1}>當前時間:{this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style1: {
    fontSize: 40,
    color: 'green'
  },
});
