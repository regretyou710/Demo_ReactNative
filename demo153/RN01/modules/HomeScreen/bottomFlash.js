import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

class BottomFlash extends Component {
    render() {
        return (
            <View style={styles.bottomFlash}>
                <Image source={require('../../img/bottomFlashImg.jpg')}
                    style={styles.bottomFlashImg} ></Image>
            </View>
        );
    }
}

// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bottomFlash: {
        width: '100%',
        height: screenWidth / 3 * 1.3,
    },
    bottomFlashImg: {
        width: '100%',
        height: screenWidth / 3 * 1.3,
        resizeMode: 'stretch',
        opacity: 0.5,
    },
});

export default BottomFlash;