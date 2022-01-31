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

//自定義組件
class Student extends Component {
  render() {
    return (
      <View>
        <Text style={styles.stu}>{this.props.name}</Text>
        <Text style={styles.stu}>{this.props.age}</Text>
        <Text style={styles.stu}>{this.props.email}</Text>
      </View>
    );
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      // <View>
      //   <Text style={styles.stu}>USER01</Text>
      //   <Text style={styles.stu}>15歲</Text>
      //   <Text style={styles.stu}>Tom@gmail.com</Text>
      // </View>

      // 調用自定義組件
      // 宣告的屬性都會被this.props接收到
      <View>
        <Student name="USER01" age="15" email="Tom@gmail.com" />
        <Text>{"\n"}</Text>
        <Student name="USER02" age="19" email="Mary@gmail.com" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stu: {
    fontSize: 40,
  },
});
