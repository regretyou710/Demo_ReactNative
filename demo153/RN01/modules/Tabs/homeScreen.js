import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import TopFlash from '../HomeScreen/topFlash';
import Service from '../HomeScreen/service';
import Icons from '../HomeScreen/icons';
import BottomFlash from '../HomeScreen/bottomFlash';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                {/* 輪播圖區塊Start */}
                <TopFlash />
                {/*  輪播圖區塊End */}

                <Text style={styles.clean}>- 專業清洗 -</Text>

                {/* 橫排四個分類Start */}
                <Service />
                {/* 橫排四個分類End */}

                {/* 五個小圖標Start */}
                <Icons />
                {/* 五個小圖標End */}


                {/* 底部輪播圖Start */}
                <BottomFlash />
                {/* 底部輪播圖End */}
            </View >
        );
    }
}

// let screenWidth = Dimensions.get('window').width;// 取得螢幕寬度
let screenHeight = Dimensions.get('window').height;// 取得螢幕高度

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        height: screenHeight - 60 - StatusBar.currentHeight,
    },
    clean: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        marginTop: 15,
    },
});

export default HomeScreen;