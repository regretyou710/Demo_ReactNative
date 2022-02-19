import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {/* 輪播圖區塊Start */}
                <View style={styles.flash}>
                    <Swiper
                        showsButtons={true}
                        autoplay={true}
                        autoplayTimeout={2.5}
                        horizontal={true}
                    >
                        <Image
                            style={styles.flashPic}
                            source={require('../../img/banner1.jpg')}
                        ></Image>
                        <Image
                            style={styles.flashPic}
                            source={require('../../img/banner2.jpg')}
                        ></Image>
                        <Image
                            style={styles.flashPic}
                            source={require('../../img/banner3.jpg')}
                        ></Image>
                    </Swiper>

                    <View style={styles.city}>
                        <Text style={styles.cityName}>台灣</Text>
                        <Ionicons name={'caret-down'} size={18} />
                    </View>
                </View>
                {/*  輪播圖區塊End */}

                <Text style={styles.clean}>- 專業清洗 -</Text>

                {/* 橫排四個分類Start */}
                <View style={styles.cleanList}>
                    <View style={[styles.cleanItem, styles.cleanItem1]}>
                        <Text style={styles.cleanTitle}>洗衣</Text>
                        <Image source={require('../../img/img1.png')}
                            style={styles.cleanImg}></Image>
                    </View>
                    <View style={[styles.cleanItem, styles.cleanItem2]}>
                        <Text style={styles.cleanTitle}>洗鞋</Text>
                        <Image source={require('../../img/img2.png')}
                            style={styles.cleanImg}></Image>
                    </View>
                    <View style={[styles.cleanItem, styles.cleanItem3]}>
                        <Text style={styles.cleanTitle}>洗家紡</Text>
                        <Image source={require('../../img/img3.png')}
                            style={styles.cleanImg}></Image>
                    </View>
                    <View style={[styles.cleanItem, styles.cleanItem4]}>
                        <Text style={styles.cleanTitle}>窗簾清洗</Text>
                        <Image source={require('../../img/img4.png')}
                            style={styles.cleanImg}></Image>
                    </View>
                </View>
                {/* 橫排四個分類End */}

                {/* 五個小圖標Start */}
                <View style={styles.icons}>
                    <View style={styles.iconItem}>
                        <View style={styles.icon}>
                            <Ionicons name={'grid'} size={35} />
                        </View>
                        <Text style={styles.iconTitle}>服務介紹</Text>
                    </View>
                    <View style={styles.iconItem}>
                        <View style={styles.icon}>
                            <Ionicons name={'earth'} size={35} />
                        </View>
                        <Text style={styles.iconTitle}>服務範圍</Text>
                    </View>
                    <View style={styles.iconItem}>
                        <View style={styles.icon}>
                            <Ionicons name={'logo-yen'} size={35} />
                        </View>
                        <Text style={styles.iconTitle}>價目中心</Text>
                    </View>
                    <View style={styles.iconItem}>
                        <View style={styles.icon}>
                            <Ionicons name={'chatbubble-ellipses'} size={35} />
                        </View>
                        <Text style={styles.iconTitle}>意見回饋</Text>
                    </View>
                    <View style={styles.iconItem}>
                        <View style={styles.icon}>
                            <Ionicons name={'shirt'} size={35} />
                        </View>
                        <Text style={styles.iconTitle}>團體洗衣</Text>
                    </View>
                </View>
                {/* 五個小圖標End */}
            </View >
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
    },
    clean: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        marginTop: 15,
    },
    cleanList: {
        flexDirection: "row",
        marginBottom: 15,
        borderBottomColor: '#F3F7FA',
        borderBottomWidth: 10,
    },
    cleanItem: {
        width: '25%',
        alignItems: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#F3F6FD',
        paddingTop: 10,
        paddingBottom: 10,
    },
    cleanItem1: {
        backgroundColor: '#FAFDFF',
        borderLeftWidth: 1,
    },
    cleanItem2: {
        backgroundColor: '#FAFDFF',
    },
    cleanItem3: {
        backgroundColor: '#FAFDFF',
    },
    cleanItem4: {
        backgroundColor: '#FAFDFF',
    },
    cleanTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: -3,
    },
    cleanImg: {
        width: '70%',
        height: screenWidth / 4 * 0.7,
    },
    icons: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // paddingTop: 7,
        paddingBottom: 10,
    },
    iconItem: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    icon: {
        width: '60%',
        height: screenWidth / 5 * 0.6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTitle: {
        fontSize: 16,
        // textAlign: 'center',
        marginTop: 5,
    },
})

export default HomeScreen;