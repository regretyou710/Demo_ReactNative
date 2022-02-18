import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                {/* 輪播圖區塊Start */}
                <View style={styles.flash}>
                    <Image style={styles.flashPic} source={require('../../img/banner.jpg')}
                    ></Image>
                </View>
                {/*  輪播圖區塊End */}
            </View>
        );
    }
}

// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    flash: {
        width: screenWidth,
        height: screenWidth * 512 / 1024,
        backgroundColor: 'tomato',
    }, flashPic: {
        width: screenWidth,
        height: screenWidth * 512 / 1024,
    }
})

export default HomeScreen;