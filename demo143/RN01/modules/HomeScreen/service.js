import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class Service extends Component {
    render() {
        return (
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
        );
    }
}

// 取得螢幕寬度
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
});

export default Service;