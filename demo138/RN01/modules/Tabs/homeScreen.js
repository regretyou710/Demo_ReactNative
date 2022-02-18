import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                {/* 輪播圖區塊Start */}
                <View style={styles.flash}>
                    <Image style={styles.flashPic} source={require('../../img/banner.jpg')}
                    ></Image>
                    <View style={styles.city}>
                        <Text style={styles.cityName}>台灣</Text>
                        <Ionicons name={'caret-down'} size={22} />
                    </View>
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
        // backgroundColor: 'tomato',

        // 父元素開啟定位功能
        position: 'relative',

        // justifyContent: 'center',
        // alignItems: 'center', 
    },
    flashPic: {
        width: screenWidth,
        height: screenWidth * 512 / 1024,
    },
    city: {
        // 子元素絕對定位
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '16%',
        height: 28,
        left: '42%',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        flexDirection: 'row',
    },
    cityName: {
        marginRight: 3,
    }
})

export default HomeScreen;