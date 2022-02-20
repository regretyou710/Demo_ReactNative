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
                        <View style={styles.centerTopContainerLeft}>
                            <Image
                                source={require('../../img/userImg.jpg')}
                                style={styles.userImg}
                            ></Image>
                            <View style={styles.centerTopContainerLeftContent}>
                                <Text style={styles.centerTopContainerLeftContentLogin}>立即登入</Text>
                                <Text style={styles.centerTopContainerLeftContentDescr}>讓生活多份自在</Text>
                            </View>
                        </View>
                        <View style={styles.centerTopContainerRight}>
                            <Text style={styles.centerTopContainerRightContent}>充值</Text>
                            <Ionicons name={'chevron-forward-outline'} size={18} style={styles.centerTopContainerRightContent} />
                        </View>
                    </View>
                </View>
                {/* 頂部End */}

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
    centerTopContainerLeft: {
        width: '35%',
        height: screenWidth / 3 * 0.5,
        // backgroundColor: 'red',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerTopContainerRight: {
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
    centerTopContainerLeftContent: {

    },
    centerTopContainerLeftContentLogin: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.7)',
        marginBottom: 6,
    },
    centerTopContainerLeftContentDescr: {
        color: 'rgba(0,0,0,0.5)',
    },
    centerTopContainerRightContent: {
        fontSize: 17,
        color: 'orange',
    },
});

export default MyCenterScreen;