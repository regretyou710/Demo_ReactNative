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

                {/* 帳戶訊息Start */}
                <View style={styles.account}>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountVal}>0張</Text>
                        <Text style={styles.accountDescr}>優惠券</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountVal}>
                            <Ionicons name={'logo-yen'} size={13} color={'rgba(0,0,0,0.8)'} /> 0.00
                        </Text>
                        <Text style={styles.accountDescr}>餘額</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountVal}>0張</Text>
                        <Text style={styles.accountDescr}>e卡</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountVal}>0</Text>
                        <Text style={styles.accountDescr}>積分</Text>
                    </View>
                </View>
                {/* 帳戶訊息End */}

                {/* 其他區域Start */}
                <View style={styles.other}>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'location'} style={styles.otherLeftIcon1} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >常用地址</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'heart'} style={styles.otherLeftIcon2} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >推薦有獎</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'gift'} style={styles.otherLeftIcon3} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >積分商城</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'people'} style={styles.otherLeftIcon4} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >取送小e招募</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                </View>
                {/* 其他區域End */}

                {/* 意見回饋Start */}
                <View style={styles.other}>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'chatbox-ellipses'} style={styles.otherLeftIcon1} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >意見回饋</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                    <View style={styles.otherItem}>
                        <View style={styles.otherLeft}>
                            <Ionicons name={'ellipsis-horizontal'} style={styles.otherLeftIcon2} />
                        </View>
                        <View style={styles.otherRight} >
                            <Text style={styles.otherRightTitle} >更多</Text>
                            <Ionicons name={'chevron-forward-outline'} style={styles.otherRightIcon} />
                        </View>
                    </View>
                </View>
                {/* 意見回饋End */}

                {/* 客服Start */}
                <View style={styles.service}>
                    <Ionicons name={'call'} style={styles.serviceIcon} />
                    <Text style={styles.serviceTitle}>客服電話</Text>
                </View>
                {/* 客服End */}
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
    account: {
        width: '100%',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 8,
        borderBottomColor: '#F3F7FA',
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountItem: {
        width: '25%',
        alignItems: 'center',
    },
    accountVal: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.8)',
    },
    accountDescr: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.5)',
    },
    other: {
        borderBottomWidth: 8,
        borderBottomColor: '#F3F7FA',
    },
    otherItem: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    otherLeft: {
        width: 20 + 22 + 10,
        alignItems: 'center',
    },
    otherLeftIcon1: {
        // width: 22,          
        fontSize: 22,
        color: '#32CAEA',
        // marginLeft: 20,
        // marginRight: 10,
    },
    otherLeftIcon2: {
        // width: 22,
        fontSize: 22,
        color: '#FF93B4',
        // marginLeft: 20,
        // marginRight: 10,
    },
    otherLeftIcon3: {
        // width: 22,
        fontSize: 22,
        color: '#47D862',
        // marginLeft: 20,
        // marginRight: 10,
    },
    otherLeftIcon4: {
        // width: 22,
        fontSize: 22,
        color: '#65A6FF',
        // marginLeft: 20,
        // marginRight: 10,
    },
    otherRight: {
        width: screenWidth - 72,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    otherRightTitle: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.5)',
    },
    otherRightIcon: {
        fontSize: 22,
        color: 'rgba(0,0,0,0.5)',
    },
    service: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceIcon: {
        fontSize: 22,
        color: '#32CAEA',
        marginRight: 10,
    },
    serviceTitle: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.5)',
    }
});

export default MyCenterScreen;