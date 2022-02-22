import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyCenterScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* 頂部Start */}
                <View style={styles.centerTop}>
                    <Image
                        source={require('../../img/mycenterbanner.jpg')}
                        style={styles.centerTopImg}></Image>
                    <View style={styles.centerTopContainer}>
                        <View style={styles.centerTopLeft}>
                            <Image
                                source={require('../../img/userImg.jpg')}
                                style={styles.userImg}
                            ></Image>
                            <View style={styles.centerTopLeftContent}>
                                <Text style={styles.centerTopLeftContentLogin}>立即登入</Text>
                                <Text style={styles.centerTopLeftContentDescr}>讓生活多份自在</Text>
                            </View>
                        </View>
                        <View style={styles.centerTopRight}>
                            <Text style={styles.centerTopRightContent}>充值</Text>
                            <Ionicons name={'chevron-forward-outline'} size={18} style={styles.centerTopRightContent} />
                        </View>
                    </View>
                </View>
                {/* 頂部End */}

                {/* 我的錢包區域Start */}
                <View style={styles.walletContainer}>
                    <View style={styles.walletLeft}>
                        <Ionicons name={'wallet'} size={22} style={styles.walletIcon} />
                        <Text style={styles.myWallet}>我的錢包</Text>
                    </View>
                    <Text style={styles.walletRight}>開發票</Text>
                </View>
                {/* 我的錢包區域End */}
            </View>
        );
    }
}
// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    centerTop: {
        width: '100%',
        height: screenWidth / 3,
        // borderWidth: 1,
        position: 'relative',
    },
    centerTopImg: {
        width: '100%',
        height: screenWidth / 3,
        resizeMode: 'cover',
        opacity: 0.5,
    },
    centerTopContainer: {
        width: '100%',
        height: screenWidth / 3,
        // backgroundColor: 'yellow',
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centerTopLeft: {
        width: '35%',
        height: screenWidth / 3 * 0.5,
        // backgroundColor: 'red',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerTopRight: {
        // width: '30%',
        // height: screenWidth / 3 * 0.33,
        // backgroundColor: 'blue',
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImg: {
        width: screenWidth / 7.6,
        height: screenWidth / 7.6,
        // resizeMode: 'cover',
        borderRadius: 5,
        // borderWidth: 1,
        // backgroundColor: 'green',
        marginRight: 5,
    },
    centerTopLeftContent: {

    },
    centerTopLeftContentLogin: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.7)',
        marginBottom: 6,
    },
    centerTopLeftContentDescr: {
        color: 'rgba(0,0,0,0.5)',
    },
    centerTopRightContent: {
        fontSize: 17,
        color: 'orange',
    },
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.5)',
    },
    walletLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    walletIcon: {
        marginRight: 5,
        color: 'rgba(0,0,0,0.5)',
    },
    myWallet: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.5)',
    },
    walletRight: {
        fontSize: 16,
        marginRight: 20,
        color: 'tomato',
    },
});

export default MyCenterScreen;